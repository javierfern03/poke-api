import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({ pokemon }) => {
  const [poke, setPoke] = useState()
  useEffect(() => {
    axios.get(pokemon.url)
      .then(res => setPoke(res.data))
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pokedex/${poke.id}`)
  }

  return (
    <article className='card__pokemon' onClick={handleClick}>

      <div className='top__card'>
        <img className='pokemon__img' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
        <h1 className='pokemon__name'>{poke?.name}</h1>
        {
          poke?.types.map(type => (
            <h2 key={type.type.name}>{`${type.type.name}`}</h2>
          ))
        }
        <span>Type</span>
      </div>

      <hr />
      <div className='bottom__card'>
        {
          poke?.stats.map(stat => (
            <div className='stats' key={stat.stat.url}>
              <span>{stat.stat.name}</span><p>{stat.base_stat}</p> 
            </div>
          ))
        }
      </div>
    </article>
  )
}

export default PokeCard