import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'


const PokeCard = ({ pokemon }) => {
  const [poke, setPoke] = useState()
  const [pokeImg, setPokeImg] = useState()

  useEffect(() => {
    axios.get(pokemon.url)
      .then(res => {
        setPoke(res.data)
        setPokeImg(res.data.sprites.other['official-artwork'].front_default)

      })
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/pokedex/${poke.id}`)
  }
  return (
    <article className={`card__pokemon bg-${poke?.types[0].type.name}`} onClick={handleClick}>

      <div className='top__card'>
        <img className='pokeball__poke' src={pokeImg ? '/img/pokeballTrans.png' : 'holas'} alt="" />
        <div className='container--img'>
          <img className='pokemon__img placeholder' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
        <h1 className='pokemon__name placeholder'>{poke?.name }</h1>
        <div className='div-flex-types'>
          {
            poke?.types.map(type => (
              <div key={type.type.name} className={`types bg-type-${type.type.name} placeholder`}>
                <h2 className='h2__types'>{`${type.type.name} `}</h2>
              </div>
            ))
          }
        </div>
      </div>
    </article>
  )
}

export default PokeCard