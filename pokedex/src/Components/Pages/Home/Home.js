import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import {BASE_URL} from '../../Bases/urls';
import {CardPokes} from '../../Styled/Styled';
import createContext from '../../Context/createContext'

function Home() {
  const pokemon = useContext(createContext)
  const [poke, setpoke] = useState([])

  useEffect(()=>{
    axios.get(`${BASE_URL}`)
    .then((res)=>{
      setpoke(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  })

  return (
    <div>
      {poke.map((p)=>{
        return(
          <div>
            <p>{p.name}</p>
            <img url={p.url}/>
          </div>
        )
      })}
    </div>
  )
}

export default Home