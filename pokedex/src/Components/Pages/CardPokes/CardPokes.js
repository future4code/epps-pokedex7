import React, { useContext } from "react"
import {useRequestData} from "../../Hooks/useRequestData"
import {useHistory} from "react-router-dom"
import {goToDetailsPokemon} from "../../../Router/Coordinator";
import {useEffect, useState} from 'react';
import GlobalStateContext from "../../Global/GlobalStateContext";
import {Card, DivPokemon} from '../../Styled/Styled';


const CardPokes = (props) => {
    const [pokeImg, setpokeImg] = useState('')
    const [changePage, setchangePage] = useState(true);
    const { states, setters, requests } = useContext(GlobalStateContext);
    const history = useHistory()
    // const [pokemon, setPokemon] = useState([])
    const pokemon = useRequestData(props.url, undefined)

    // const [ligar, setligar] = useState(false)

  // useEffect(() => {
  //   axios.get(`${props.url}`)
  //     .then((res) => {
  //       setpokeImg(res.data.sprites.front_default)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  // const changeBotao = () =>{
  //   setligar(!ligar)
  // }

  return (
    <div>
    <Card>
    {pokemon && 
            <div>
                <img src={pokemon.sprites.front_default}/>
                <p>{pokemon.name}</p> 
                <button type="button" class="nes-btn is-success" onClick={props.addPoke}>Me escolha</button>
                <button type="button" class="nes-btn is-error">Remover</button>
                <button type="button" class="nes-btn is-primary" onClick={() => goToDetailsPokemon(history, pokemon.id)}>Mais sobre mim</button>
            </div>
            }
    </Card>
    </div>
  )
}

export default CardPokes