import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokeInfo = () => {

  const { id } = useParams()
  const [pokemon, setPokemon] = useState()
  const [hasErr, sethasErr] = useState(false)

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
  console.log(pokemon?.abilities)
  if (hasErr) {
    return <h1>this pokemon with name "{id}" not fount (～￣(OO)￣)ブ</h1>
  } else {
    return (
      <div className='card__info'>
        <header>
          <img className='header__img' src="src\img\pokedex.png" alt="" />
        </header>
        <div className='content__poke__info'>
          <div className='top__card__info'>
            <div className='content__img-info'>
        <img className='img__info' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </div>
            <h1>{pokemon?.name}</h1>
          </div>
          <hr />
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
                      <span>{t.type.name}</span>
                    ))
                  }
                </div>
              </div>
              <div className='box__t-a'>
                <h2>Ability</h2>
                <div className='types-abilitys'>
                  {
                    pokemon?.abilities.map(a => (
                      <span>{a.ability.name}</span>
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
                <div key={pokemon?.id} className='stat__bar'>
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