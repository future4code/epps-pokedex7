import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import GlobalStateContext from "../../Global/GlobalStateContext"
import CardPokes from '../CardPokes/CardPokes';
import {DivPokemon} from '../../Styled/Styled'

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
            <DivPokemon>
                <h1>Sua lista de pokemons</h1>
                <div class="nes-container with-title is-centered">
                    <p class="title"></p>
                    <p>Olá, segue seus pokemons escolhidos..</p>
                </div>
            </DivPokemon>
            {pokeList}
        </div>
    )
}

export default Pokedex