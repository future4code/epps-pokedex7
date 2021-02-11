import React, { useEffect, useState } from "react";
import axios from "axios";


export function CardPokes(props) {
  const [pokemonImage, setPokemonImage] = useState();

  const getPokemonImage = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((resposta) => {
        setPokemonImage(resposta.data.sprites.front_default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    getPokemonImage();
  }, []);
  
  return (
    <div>
      <img src={pokemonImage} />
      <h3>{props.name}</h3>
    </div>
  );
}
export default CardPokes;