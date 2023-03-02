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
        <img src="src\img\pokedex.png" alt="" />
        <h1>hi Trainer</h1>
        <p>To start this Pokedex, give me your name</p>
        <form onSubmit={handleSubmit} action="">
          <input className='input__home' type="text" placeholder='Your name...' id="name" />
          <button>Start</button>
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