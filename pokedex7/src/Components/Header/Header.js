import React from "react";
import { useHistory } from "react-router-dom";
import {
  goToHomePage,
  goToPokedex,
  goToPokemonDetails,
} from "../../Router/Coordinator";

const Header = () => {
  const history = useHistory();

  return (
      <div>
          <button onClick={() =>goToHomePage(history)}>Home</button>
          <button onClick={() =>goToPokedex(history)}>Pokedex</button>
          <button onClick={() =>goToPokemonDetails(history)}>Details</button>
      </div>
  )
};

export default Header
