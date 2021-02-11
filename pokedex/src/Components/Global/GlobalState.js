import React, { useState, useEffect } from "react"
import axios from "axios"
import {BASE_URL} from "../Bases/urls"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
  const [pokemon, setPokemon] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [pokedexPage, setPokedexPage] = useState(false)
 
   const getPokemons = () => {
    axios.get(`${BASE_URL}`)
      .then((response) => {
        setPokemon(response.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
    }

  const states = {pokemon, pokedex, pokedexPage}
  const setters = {setPokemon, setPokedex, setPokedexPage}
  const requests = {getPokemons}

  const data = { states, setters, requests }

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState