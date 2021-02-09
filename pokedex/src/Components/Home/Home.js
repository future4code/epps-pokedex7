import axios from 'axios'
import React, { useState, useEffect } from "react";

const HomePage = () => {
    const [poke, setpoke] = useState([])

    const getPoke = () =>{
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then((respondeu)=>{
            setpoke(respondeu.data.results)
            console.log(respondeu.data.results)
        }).catch((error)=>{
            alert('nao pegou os pokemons')
        })
    }

    useEffect(()=>{
        getPoke()
    }, [])

    return (
        <div>
            <p>Pokedex - Lista de todos os pokemons</p>
            {poke.map((t)=>{
          return(
              <div>
                    <p>{t.name}</p>
                </div>
          )
      })}
        </div>
    )
}
export default HomePage