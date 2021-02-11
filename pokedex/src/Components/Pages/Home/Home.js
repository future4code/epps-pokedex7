import React, { useEffect, useState } from "react";
import axios from "axios";
import {BASE_URL} from "../../Bases/urls";
import {Cardpoke} from '../../Styled/Styled';
import CardPokes from '../CardPokes/CardPokes';
import {goToPokemonDetails} from '../../../Router/Coordinator'
import { useHistory } from "react-router-dom";


const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const history = useHistory();

  const getPokemon = () => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setPokemonList(response.data.results); 
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPokemon();
  }, []);

  const pokemonsPokeCard = pokemonList.map((pokemon) => {
    return (
        <div>
          <CardPokes name={pokemon.name} />
          <button  type="button" onClick={()=>goToPokemonDetails(history)} className="nes-btn is-warning">Detalhes</button>
        </div>
        )
  });
  return (
    <div>
      <div>{pokemonsPokeCard}</div>
    </div>
  );
};
export default Home;

{/* <Button onClick={()=>goToApplyToTrip(history)} variant="contained" color="secondary">Candidtar</Button> */}
