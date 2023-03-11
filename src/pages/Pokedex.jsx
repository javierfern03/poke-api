import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokeCard from '../Components/pokedex/PokeCard'
import SelectTypes from '../Components/pokedex/SelectTypes'
import SkeletonPokeCard from '../Components/pokedex/SkeletonPokeCard'
import 'react-loading-skeleton/dist/skeleton.css'
import { setIsLoading } from '../store/slices/isLoading.slice'

const Pokedex = () => {


  const { nameTrainer, isLoading } = useSelector(state => state)
  const [pokemons, setPokemons] = useState()
  const navigate = useNavigate()
  const [selectValue, setSelectValue] = useState('all')
  const dispatch = useDispatch()


  useEffect(() => {
    if (selectValue == 'all') {
      const url = ' https://pokeapi.co/api/v2/pokemon?limit=15&offset=0'
      axios.get(url)
        .then(res => {
          setPokemons(res.data)
          setTimeout(() => {
            dispatch((setIsLoading()))
            console.log(isLoading)
          }, 500);
        })
        .catch(err => console.log(err))
    } else {
      axios.get(selectValue)
        .then(res => {
          const results = res.data.pokemon.map(e => e.pokemon)
          setPokemons({ results })
          setTimeout(() => {
            dispatch((setIsLoading()))
          }, 500);
        })
        .catch(err => console.log(err))
    }
  }, [selectValue])
  console.log(isLoading)
  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.pokemon.value.trim().toLowerCase()
    navigate(`/pokedex/${inputValue}`)
    dispatch((setIsLoading()))
    e.target.pokemon.value = ''
  }

  return (
    <div>
      <header>
        <img className='header__img' src="/img/pokemonLogo.png" alt="" />
        {/* <img className='header__img img__pokeball' src="/img/pokeballTrans.png" alt="" /> */}

      </header>
      <div className='content__pokedex'>
        <h3><span>Welcome {nameTrainer}</span>, here you can find your favorite pokemon.</h3>
        <form className='form' onSubmit={handleSubmit}>
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

          {isLoading ? <SkeletonPokeCard card={12} /> :
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