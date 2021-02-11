import React, { useContext } from "react";
import CardPokes from "../CardPokes/CardPokes";
import styled from "styled-components";
import GlobalStateContext from "../../Global/GlobalStateContext";

const HomeContainer = styled.div``;

const HomePage = () => {
  const { states } = useContext(GlobalStateContext);

  return (
    <HomeContainer>
      {states.pokemon &&
        states.pokemon.map((item,) => {
          return <CardPokes url={item.url} />;
        })}
        <p>teste</p>
    </HomeContainer>
  );
};

export default HomePage;
