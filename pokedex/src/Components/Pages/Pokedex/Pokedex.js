import React, { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext"
import CardPokes from '../CardPokes/CardPokes';
import {DivPokemon, Imagem} from '../../Styled/Styled';
import imgHeader from '../../../imagens/img1.jpg';

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
            {/* <Imagem src={imgHeader}/> */}
            <DivPokemon>
                <h1>Sua lista de pokemons</h1>
            </DivPokemon>
            {pokeList}            

        </div>
    )
}

export default Pokedex