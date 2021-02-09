import React from "react";
import {useHistory} from 'react-router-dom';
import {
  goToHomePage,
  goToPokedex,
  goToPokemonDetails,
} from "../../Router/Coordinator";
import styled from 'styled-components'


const DivMain = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
`

const Header = () => {
  const history = useHistory()

  return (
      <DivMain>
          <a class="nes-btn" href="#" onClick={() =>goToHomePage(history)}>Home</a>
          <a class="nes-btn" href="#" onClick={() =>goToPokemonDetails(history)}>Details</a>
          <a class="nes-btn" href="#" onClick={() =>goToPokedex(history)}>Pokedex</a>
          <hr/>
      </DivMain>
  )
};

export default Header
