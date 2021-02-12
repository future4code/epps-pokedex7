import React, { useContext, useEffect } from "react"
import {useRequestData} from "../../Hooks/useRequestData"
import {useHistory} from "react-router-dom"
import {goToDetailsPokemon} from "../../../Router/Coordinator";
import GlobalStateContext from "../../Global/GlobalStateContext";
import {Card} from '../../Styled/Styled'

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
            <div>
                <img src={addPoke.sprites.front_default}/>
                <p>{addPoke.name}</p> 
            <div>
                {!states.pokedexPage && <button type="button" class="nes-btn is-success" onClick={props.addPoke}>Me escolha</button>}
                <button type="button" class="nes-btn is-primary" onClick={() => goToDetailsPokemon(history, addPoke.id)}>Mais sobre mim</button>
                {states.pokedexPage && <button class="nes-btn is-error" onClick={() => removePoke(props.name)}>Deletar</button>}
            </div>
            </div>
            }
        </Card>
    )
}

export default CardPokes 