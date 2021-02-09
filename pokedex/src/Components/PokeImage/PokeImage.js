import axios from 'axios'
import React, { useState, useEffect } from "react";
import Appcss from '../../App.css';

const PokeImage = () => {
    const [poke, setpoke] = useState([])
    const [pokeImage, setPokeImage] = useState([])

    const getPoke = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then((respondeu)=>{
            setpoke(respondeu.data.results)
            // console.log(respondeu.data.results)
        }).catch((error)=>{
            alert('nao pegou os pokemons')
        })
    }

    useEffect(()=>{
        getPoke()
    }, [])

    const getPokeImage = (link) => {
        axios.get(link)
    
      .then((res) => {
        setPokeImage(res.data.sprites.front_default);
        console.log(res.data.sprites.front_default)
      })
      .catch((err) => {
        console.log(err);
      });
    };

    return (
        <div>
            <p>Lista de todos os pokemons</p>
            {poke.map((t)=>{
                getPokeImage(t.url)
          return(
            <div class="nes-table-responsive">
                    <td>{t.name}</td>
                    <img src={t.url}/>
                </div>
          )
      })}

        </div>
    )
}
export default HomePage

