import React from "react"
import {useRequestData} from "../../Hooks/useRequestData"
import {useHistory} from "react-router-dom"
import {goToDetailsPokemon} from "../../../Router/Coordinator"


const CardPokes = (props) => {
    const history =  useHistory()
    const pokemon = useRequestData(props.url, undefined)

     
    return (
        <div>
            {pokemon && 
            <div>
                <img src={pokemon.sprites.front_default}/>
                <p>{pokemon.name}</p> 
                 
            <div>
                <button onClick={() => goToDetailsPokemon(history, pokemon.id)}>DETALHES</button>
            </div>
            </div>
            }
        </div>
    )
}

export default CardPokes