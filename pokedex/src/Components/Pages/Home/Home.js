import React, { useContext, useEffect } from "react";
import CardPokes from "../CardPokes/CardPokes";
import styled from "styled-components";
import GlobalStateContext from "../../Global/GlobalStateContext";

const HomeContainer = styled.div``;

const HomePage = () => {
  const { states, setters, requests } = useContext(GlobalStateContext);

  useEffect(()=>{
    requests.getPokemons()
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
          name={item.name}
          url={item.url} //card poke da imagem?
          addPoke={() => addPoke(item)}
        />
    )
  })

  return (
    <HomeContainer>
      {Pokelist}
    </HomeContainer>
  )
};

export default HomePage;
