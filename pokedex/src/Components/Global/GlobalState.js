// import React, { useState, useEffect } from 'react';
// import GlobalContext from '../global/GlobalContext';
// import axios from 'axios';
// import { BASE_URL } from '../../constants/constants';
// // import useRequestData from '../../Hooks/useRequestData';

// function GlobalState(props) {
//     const pokemonList = useRequestData({}, BASE_URL)
//     const [listTotalPokemon, setLisTotalPokemon] = useState([])
//     const [listPokemon, setListPokemon] = useState([])
//     const [pokedex, setPokedex] = useState([])

//     const getPokemons = () => {
//         const newListPokemon = []
//         pokemonList.results && pokemonList.results.map((item) => {
//             axios.get(item.url).then((response) => {
//                 newListPokemon.push(response.data)
//                 if (newListPokemon.length === 20) {
//                     setListPokemon(newListPokemon)
//                     setLisTotalPokemon(newListPokemon)
//                 }
//             }).catch(error => { alert(error) })
//         })
//     }
//     useEffect(() => {
//         getPokemons()
//     }, [pokemonList.results]);

//     const data = { listPokemon, setListPokemon, pokemonList, getPokemons, pokedex, setPokedex, listTotalPokemon }
//     return (
//         <GlobalContext.Provider value={ data }>
//             { props.children }
//         </GlobalContext.Provider>
//     )
// }

// export default GlobalState;