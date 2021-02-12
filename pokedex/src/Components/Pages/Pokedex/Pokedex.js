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
                <span class="nes-text is-primary">Sua </span>
                <span class="nes-text is-success">Lista </span>
                <span class="nes-text is-warning">das </span>
                <span class="nes-text is-error">Pokedex</span>
            </DivPokemon>
            {pokeList}            

        </div>
    )
}

export default Pokedex