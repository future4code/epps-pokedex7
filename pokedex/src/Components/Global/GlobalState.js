import React, { useState } from "react";
import axios from "axios";
import createContext from "../Context/createContext";

const GlobalState = (props) => {
  const [pokemon, setpokemon] = useState([]);
  
  // const data = useContext(GlobalStateContext)
    const getPokemon = (() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => {
          setpokemon(res.data.results)
          console.log(setpokemon)
        })
        .catch((err) => {
            console.log(err)
        })
  }, [])

  const states = {pokemon}
  const setters = {setpokemon}
  const requests = {getPokemon}
  const data = {states, setters, requests}
  

  return (
    <createContext.Provider value={data}>
      {props.children}
    </createContext.Provider>
  );
};

export default GlobalState;
