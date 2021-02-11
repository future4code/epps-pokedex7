import React from "react";
import {useHistory} from 'react-router-dom';
import {
  goToHomePage,
  goToPokedex,
  goToPokemonDetails,
} from "../../Router/Coordinator";
import styled from 'styled-components'
import "nes.css/css/nes.min.css";

const DivMain = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
`

const Header = () => {
  const history = useHistory()

  return (
      <DivMain>
        <button type="button" class="nes-btn is-success" onClick={() =>goToHomePage(history)}>Home</button>
          <button type="button" class="nes-btn is-warning" onClick={() =>goToPokedex(history)}>Pokedex</button>
          <button type="button" class="nes-btn is-primary" onClick={() =>goToPokemonDetails(history)}>Detalhes</button>
          <hr/>
      </DivMain>
  )
};

export default Header
