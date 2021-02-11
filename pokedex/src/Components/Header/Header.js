import React from "react";
import {useHistory} from 'react-router-dom';
import {goToHomePage, goToPokedex, goToPokemonDetails} from "../../Router/Coordinator";
import styled from 'styled-components'
import "nes.css/css/nes.min.css";
import imageHeader from '../../../src/imagens/img2.jpg'

const DivMain = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  margin: auto;
  text-align: center;
`

const Imagem = styled.img`
    width: 100%;
    height: 100px;
    object-fit: cover;
    margin: 0px;
    padding: 0px;
`

const Header = () => {
  const history = useHistory()

  return (
      <DivMain>
        <Imagem src={imageHeader}/>
        <button type="button" class="nes-btn is-success" onClick={() =>goToHomePage(history)}>Home</button>
          <button type="button" class="nes-btn is-warning" onClick={() =>goToPokedex(history)}>Pokedex</button>
      </DivMain>
  )
};

export default Header
