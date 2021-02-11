import React, { useContext } from "react"
import {useRequestData} from "../../Hooks/useRequestData"
import {useHistory} from "react-router-dom"
import {goToDetailsPokemon} from "../../../Router/Coordinator";
import {useEffect, useState} from 'react';
import axios from 'axios';
import GlobalStateContext from "../../Global/GlobalStateContext";


const CardPokes = (props) => {
    const [pokeImg, setpokeImg] = useState('')
    const [changePage, setchangePage] = useState(true);
    const { states, setters, requests } = useContext(GlobalStateContext);

  useEffect(() => {
    axios.get(`${props.url}`)
      .then((res) => {
        setpokeImg(res.data.sprites.front_default)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const removePoke = (name) =>{
    console.log(states.pokedex)
    states.pokedex.map(poke=>{
      if(poke.name === name){
        console.log(poke)
      }
    })
  }

  return (
    <div>
    <p>{props.name}</p>
    <img src={pokeImg}/>
    {!states.pokedexPage ? <button onClick={props.addPoke}> Adicionar</button> : <button onClick={()=>removePoke(props.name)}> Deletar</button>}
    </div>
  )
}

export default CardPokes