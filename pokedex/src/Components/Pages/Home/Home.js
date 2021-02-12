import React, { useContext, useEffect } from "react";
import CardPokes from "../CardPokes/CardPokes";
import styled from "styled-components";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { CenterP, ContainerPokemons } from '../../Styled/Styled'

const HomeContainer = styled.div``;

const DivPokemon = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 10px;
    font-family: 'Press Start 2P', cursive;
`


const HomePage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);

  useEffect(() => {
    requests.getPokemons()
    setters.setPokedexPage(false)
  }, [])

  const addPoke = (newItem) => {
    const index = states.pokedex.findIndex((i) => i.name === newItem.name);
    let newList = [...states.pokedex];

    if (index === -1) {
      newList.push({ ...newItem, amount: 1 });
      alert(` ${newItem.name} foi adicionado ao seu time!`);
    }
    else {
      alert(`${newItem.name} já Faz parte do seu time`);
    }
    setters.setPokedex(newList)
  }


  console.log(states.pokedex)

  const Pokelist = states.pokemon && states.pokemon.map((item) => {
    return (
      <CardPokes
        id={item.id}
        name={item.name}
        url={item.url} //card poke da imagem?
        addPoke={() => addPoke(item)}
      />
    )
  })

  return (
    <HomeContainer>
      <DivPokemon>
        <span class="nes-text is-primary">Lista </span>
        <span class="nes-text is-success">de </span>
        <span class="nes-text is-warning">Todos </span>
        <span class="nes-text is-error">Pokemons</span>
      </DivPokemon>
      <div>
        <CenterP>
          <div class="nes-container with-title is-centered">
            <p style={{color: 'white'}}>Olá, segue a lista de pokemons disponiveis para escolha.</p>
        </div>
        </CenterP>
      </div>
      <ContainerPokemons>
        {Pokelist}
      </ContainerPokemons>
    </HomeContainer>
  )
};

export default HomePage;
