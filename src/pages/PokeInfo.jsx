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

  if (hasErr) {
    return <h1>this pokemon with name "{id}" not fount</h1>
  } else {
    return (
      <div>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h1>{pokemon?.name}</h1>
      </div>
    )
  }


}

export default PokeInfo