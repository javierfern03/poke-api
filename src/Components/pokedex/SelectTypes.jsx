import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoading } from '../../store/slices/isLoading.slice'

const SelectTypes = ({ setSelectValue }) => {

  const [types, setTypes] = useState()
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state)

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/type/'
    axios.get(url)
      .then(res => {
        setTypes(res.data)
        if (isLoading == false) {
          setTimeout(() => {
            dispatch((setIsLoading()))
            console.log(isLoading)
          }, 1000);
        }
      })
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setSelectValue(e.target.value)
    dispatch(setIsLoading())
    console.log(isLoading)
  }

  return (
    <select className='select__filter' onChange={handleChange}>
      <option value="all">All</option>
      {
        types?.results.map(type => (
          <option key={type.url} value={type.url}>{type.name}</option>
        ))
      }

    </select>
  )
}

export default SelectTypes