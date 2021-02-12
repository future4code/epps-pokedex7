import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import GlobalStateContext from "../../Global/GlobalStateContext"
import CardPokes from '../CardPokes/CardPokes';
import {CenterP, ContainerPokemons, PokedexConteiner } from '../../Styled/Styled';
import imgHeader from '../../../imagens/img1.jpg';
import styled from 'styled-components';
import {goToHomePage} from '../../../Router/Coordinator';
import { useHistory } from "react-router-dom";
import ImagemTeste from '../../../imagens/img5.png'

const DivPokemon = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 10px;
`

const Imagem = styled.img`
    width: 400px;
    height: 300px;
    object-fit: cover;
    margin: 0px;
`

const Pokedex = () => {

    const { states, setters, requests } = useContext(GlobalStateContext);
    useEffect(() => {
        setters.setPokedexPage(true)
        console.log(states.pokedex.length)
    })

    const history = useHistory()

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
                <h1 style={{color: 'white'}}>Sua Pokedex</h1>
            </DivPokemon>
            <div class="nes-container is-rounded">
                <CenterP>
                    <Imagem src={ImagemTeste}/>
                        <span class="nes-text is-primary">Olá </span>
                        <span class="nes-text is-success">segue a lista </span>
                        <span class="nes-text is-error"> da sua Pokedex.</span>
                </CenterP>
            </div>
            <ContainerPokemons>
                {pokeList}
            </ContainerPokemons>
            {states.pokedex.length === 0 && (
                <CenterP>
                    <p class="nes-balloon from-left nes-pointer">No momento sua pokedex está vazia :(</p><br/>
                        {/* <progress class="nes-progress is-error" value="10" max="100"></progress> */}
                    <button type="button" class="nes-btn is-primary" onClick={()=>goToHomePage(history)}>Adicionar pokemon</button>

                </CenterP>
                
            )}
        </PokedexConteiner>
    )
}

export default Pokedex