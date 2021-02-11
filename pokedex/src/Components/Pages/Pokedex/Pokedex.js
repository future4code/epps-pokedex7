import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import GlobalStateContext from "../../Global/GlobalStateContext"
import CardPokes from '../CardPokes/CardPokes'

const Pokedex = () => {

    const { states, setters, requests } = useContext(GlobalStateContext);
    useEffect(()=>{
        setters.setPokedexPage(true)
    })

    const pokeList = states.pokedex && states.pokedex.map((item) => {

        return (
            <div>
                <CardPokes
                    name={item.name}
                    url={item.url}
                />
            </div>
        )
    })

    return (
        <div>
            {pokeList}
        </div>
    )
}

export default Pokedex