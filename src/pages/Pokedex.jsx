import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokeCard from '../Components/pokedex/PokeCard'
import SelectTypes from '../Components/pokedex/SelectTypes'


const Pokedex = () => {

  const { nameTrainer } = useSelector(state => state)
  const [pokemons, setPokemons] = useState()
  const navigate = useNavigate()
  const [selectValue, setSelectValue] = useState('all')

  useEffect(() => {
    if (selectValue == 'all') {
      const url = ' https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'
      axios.get(url)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    } else {
      axios.get(selectValue)
        .then(res => {
          const results = res.data.pokemon.map(e => e.pokemon)
          setPokemons({ results })
        })
        .catch(err => console.log(err))
    }
  }, [selectValue])

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.pokemon.value.trim().toLowerCase()
    navigate(`/pokedex/${inputValue}`)

    e.target.pokemon.value = ''
  }

  return (
    <div>
      <header>
        <img className='header__img' src="src\img\pokedex.png" alt="" />
      </header>
      <div className='content__pokedex'>
        <h3><span>hi {nameTrainer}</span>, here find your favorite pokemon.</h3>
        <form onSubmit={handleSubmit}>
          <input className='input__pokedex' placeholder='Search a pokemon...' id='pokemon' type="text" />
          <button>Search</button>
        </form>
        <div className='select'>
          <div className='select__typePokemons'>
            <p>Select the pokemon is type</p>
            <SelectTypes setSelectValue={setSelectValue} />
          </div>
        </div>
        <div className='box__cards__pokemons'>
          {
            pokemons?.results.map(pokemon => (
              <PokeCard
                key={pokemon.url}
                pokemon={pokemon}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Pokedex