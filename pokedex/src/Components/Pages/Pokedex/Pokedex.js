import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import GlobalStateContext from "../../Global/GlobalStateContext"
import CardPokes from '../CardPokes/CardPokes';
import {DivPokemon, Imagem, CenterP} from '../../Styled/Styled';
import imgHeader from '../../../imagens/img1.jpg';

const Pokedex = () => {

    const { states, setters, requests } = useContext(GlobalStateContext);
    useEffect(()=>{
        setters.setPokedexPage(true)
        console.log(states.pokedex.length)
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
            {states.pokedex.length ===0 && ( 
            <CenterP><p class="nes-text is-error">Pokedex vazia.</p></CenterP>
)}
        </div>
    )
}

export default Pokedex