import React, { useContext, useEffect } from "react"
import {useRequestData} from "../../Hooks/useRequestData"
import {useHistory} from "react-router-dom"
import {goToDetailsPokemon} from "../../../Router/Coordinator";
import GlobalStateContext from "../../Global/GlobalStateContext";
import {Card} from '../../Styled/Styled';
import styled from 'styled-components';


const DivTeste = styled.div`
    font-size: 10px;
    padding: 50px;
`

const CardPokes = (props) => {
    const history =  useHistory()
    const addPoke = useRequestData(props.url, undefined)
    const { states, setters, requests } = useContext(GlobalStateContext);

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
      alert('deletado com sucesso!')
  }


    return (
        <Card>
            {addPoke && 
            <DivTeste>
                <img src={addPoke.sprites.front_default}/>
                  <h3 style={{color: 'white'}}>PERFIL</h3>
                  <p class="nes-balloon from-left nes-pointer" style={{color: 'black'}}>Olá meu nome é {addPoke.name.toUpperCase()}</p>
      
                <div>
                  {!states.pokedexPage && <button type="button" class="nes-btn is-success" onClick={props.addPoke}>Me escolha</button>}<br/><br/>
                  <button type="button" class="nes-btn is-primary" onClick={() => goToDetailsPokemon(history, addPoke.id)}>Mais sobre mim</button>
                  {states.pokedexPage && <button class="nes-btn is-error" onClick={() => removePoke(props.name)}>Deletar</button>}
                </div>
            </DivTeste>
            }
        </Card>
    )
}

export default CardPokes 