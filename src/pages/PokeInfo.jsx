import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import 'boxicons'

const PokeInfo = () => {

  const { id } = useParams()
  const [pokemon, setPokemon] = useState()
  const [hasErr, sethasErr] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    axios.get(url)
      .then(res => {
        setPokemon(res.data)
        sethasErr(false)
      })
      .catch(err => {
        sethasErr(true)
        console.log(err)
      })
  }, [id])

  const handleToBack = e => {
    navigate('/pokedex')
  }

  if (hasErr) {
    return <h1>this pokemon with name "{id}" not fount (～￣(OO)￣)ブ</h1>
  } else {
    return (
      <div className={`card__info bg-${pokemon?.types[0].type.name}`}>
        <button onClick={handleToBack} className='btn__back'>
          <box-icon name='arrow-back' size='lg'></box-icon>
        </button>
        <div className='container__img'>
          <img className='img__info' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
        <div className='content__poke__info'>
          <div className='container__name'>
            <h1 className='poke__name--info'>{pokemon?.name}</h1>
          </div>
          {/* <hr /> */}
          <div className='middle__card__info'>
            <div className='characteristics'>
              <div className='box__char'><span>Weight</span><p>{pokemon?.weight}</p></div>
              <div className='box__char'><span>Height</span><p>{pokemon?.height}</p></div>
            </div>
            <div className='type__ability'>
              <div className='box__t-a'>
                <h2>Type</h2>
                <div className='types-abilitys'>
                  {
                    pokemon?.types.map(t => (
                      <span className={`bg-type-${t.type.name} types`}>{t.type.name}</span>
                    ))
                  }
                </div>
              </div>
              <div className='box__t-a'>
                <h2>Ability</h2>
                <div className='types-abilitys'>
                  {
                    pokemon?.abilities.map(a => (
                      <span className={`bg-type-${a.ability.name} types`}>{a.ability.name}</span>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='bottom__card__info'>
            <h1>Stats</h1>
            {
              pokemon?.stats.map(j => (
                <div className='stat__bar'>
                  <div className='text__bar'><span>{j.stat.name}</span><p>{j.base_stat}/150</p></div>
                  <div className='bar s' ></div>
                </div>
              ))
            }
          </div>
          <h2 className='tittle__move'>Spacil moves</h2>
          <div className='card__moves'>
            {
              pokemon?.moves.map(m => (
                <h2 className='name__move'>{m.move.name}</h2>
              ))
            }
          </div>
        </div>
      </div>
    )
  }


}

export default PokeInfo