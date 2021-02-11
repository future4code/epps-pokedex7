import React, { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext"
import CardPokes from '../CardPokes/CardPokes'

const Pokedex = () => {

const { states, setters, requests } = useContext(GlobalStateContext);


const pokeList = states.pokedex && states.pokedex.map((item)=>{
    
    return(
        <CardPokes
            name={item.name}
            url={item.url}
        />
    )
})

    return (
        <div>
            {pokeList}
        </div>
    )
}

export default Pokedex