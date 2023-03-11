import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/trainerName.slice'

const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setNameTrainer(e.target.name.value.trim()))
    e.target.name.value = ''
    navigate('/pokedex')

  }

  return (
    <div className='home'>
      <div className='content__home'>
        <img src='/img/pokemonLogo.png' alt="" />
        <div className='home__text--container'>
          <h1 className='style__retro text--animation--h1'>hi Trainer!</h1>
          <p className='style__retro text--animation'>To start give me your trainer name</p>
        </div>
        <form onSubmit={handleSubmit} action="">
          <input className='input__home style__retro--input ' type="text" placeholder='Your name...' id="name" />
          <button className='style__retro'>Start</button>
        </form>
      </div>
      <footer>
        <div className='circleFooter'>
          <div className='childCircle'></div>
        </div>
      </footer>
    </div>
  )
}

export default Home