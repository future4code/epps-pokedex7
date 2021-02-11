import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import GlobalStateContext from "../../Global/GlobalStateContext"
import CardPokes from '../CardPokes/CardPokes';
import {DivPokemon, Imagem} from '../../Styled/Styled';
import imgHeader from '../../../imagens/img1.jpg';

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
            {/* <Imagem src={imgHeader}/> */}
            <DivPokemon>
                <h1>Sua lista de pokemons</h1>
            </DivPokemon>
            {pokeList}            

        </div>
    )
}

export default Pokedex