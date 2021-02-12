import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import GlobalStateContext from "../../Global/GlobalStateContext"
import CardPokes from '../CardPokes/CardPokes';
import { DivPokemon, Imagem, CenterP, ContainerPokemons, PokedexConteiner } from '../../Styled/Styled';
import imgHeader from '../../../imagens/img1.jpg';

const Pokedex = () => {

    const { states, setters, requests } = useContext(GlobalStateContext);
    useEffect(() => {
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
        <PokedexConteiner>
            <DivPokemon>
                <h1> Pokedex</h1>
            </DivPokemon>
            <div class="nes-container is-rounded">
                <CenterP>
                    <p class="nes-text is-primary">Olá, segue a lista de pokemons da sua Pokedex.</p>
                </CenterP>
            </div>
            <ContainerPokemons>
                {pokeList}
            </ContainerPokemons>
            {states.pokedex.length === 0 && (
                <CenterP><p class="nes-text is-error">Pokedex vazia.</p></CenterP>
            )}
        </PokedexConteiner>
    )
}

export default Pokedex