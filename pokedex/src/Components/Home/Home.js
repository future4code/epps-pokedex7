import React, { useContext, useEffect, useState } from 'react'
import CardPokes from '../CardPokes/CardPokes';
import Context from '../../Context/GlobalStateContext';
import axios from 'axios';


function Home() {
  const pokemon = useContext(Context)

  return (
    <div>
        {pokemon && pokemon.map((p) => {
          return (
            <div>
              <p>{p.name}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Home