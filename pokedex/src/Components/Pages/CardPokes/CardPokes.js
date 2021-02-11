import React, { useContext } from "react"
import { useRequestData } from "../../Hooks/useRequestData"
import { useHistory } from "react-router-dom"
import { goToDetailsPokemon } from "../../../Router/Coordinator";
import { useEffect, useState } from 'react';
import axios from 'axios';
import GlobalStateContext from "../../Global/GlobalStateContext";
import { Card, DivPokemon } from '../../Styled/Styled';
import Pokedex from '../Pokedex/Pokedex';


const CardPokes = (props) => {
  const [pokeImg, setpokeImg] = useState('')
  const [changePage, setchangePage] = useState(true);
  const { states, setters, requests } = useContext(GlobalStateContext);
  // const [ligar, setligar] = useState(false)

  useEffect(() => {
    getImage()
  }, [states.pokedex])

  const getImage = (image=props.url) =>{
    axios.get(`${image}`)
      .then((res) => {
        setpokeImg(res.data.sprites.front_default)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const removePoke = (name) =>{
    console.log(states.pokedex)
    let newPokedex = [...states.pokedex]
    states.pokedex.map((poke,index)=>{
      if(poke.name === name){
        console.log(index)
        newPokedex.splice(index, 1)
        console.log('nova pokedex ', newPokedex )
        setters.setPokedex(newPokedex)
      }
    })
}

  return (
    
      <Card>
        <DivPokemon>
          <h3><strong>Nome: </strong>{props.name}</h3>
        </DivPokemon>
        <img src={pokeImg} />
        <divBotao>
          {!states.pokedexPage ? <button class="nes-btn is-error" onClick={props.addPoke}> Me escolha</button> : 
          <button class="nes-btn is-error" onClick={() => removePoke(props.name)}> Deletar</button>}
        </divBotao>

      </Card>
    
  )
}

export default CardPokes