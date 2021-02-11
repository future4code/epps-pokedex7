import React, { useContext } from "react"
import {useRequestData} from "../../Hooks/useRequestData"
import {useHistory} from "react-router-dom"
import {goToDetailsPokemon} from "../../../Router/Coordinator";
import {useEffect, useState} from 'react';
import axios from 'axios';
import GlobalStateContext from "../../Global/GlobalStateContext";
import {Card, DivPokemon} from '../../Styled/Styled';
import Pokedex from '../Pokedex/Pokedex';


const CardPokes = (props) => {
    const [pokeImg, setpokeImg] = useState('')
    const [changePage, setchangePage] = useState(true);
    const { states, setters, requests } = useContext(GlobalStateContext);
    // const [ligar, setligar] = useState(false)

  useEffect(() => {
    axios.get(`${props.url}`)
      .then((res) => {
        setpokeImg(res.data.sprites.front_default)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // const changeBotao = () =>{
  //   setligar(!ligar)
  // }

  return (
    <div>
    <Card>
      <DivPokemon>
        <h3><strong>Nome: </strong>{props.name}</h3>
      </DivPokemon>
        <img src={pokeImg}/>
        <divBotao>
            <button type="button" class="nes-btn is-error" onClick={props.addPoke}>Me escolha</button>
        </divBotao>
        
    </Card>
    </div>
  )
}

export default CardPokes