// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react'
// import { PokeCard } from '../../Styled/Styled';
// import Context from '../../Context/createContext';
// import {BASE_URL} from '../../Bases/urls'

// function CardPokes(props) {
//   const [pokeImg, setpokeImg] = useState('')

//   useEffect(()=>{
//     axios.get(`${BASE_URL}`)
//     .then((res)=>{
//       setpokeImg(res.data.sprits.front_Default)
//       console.log(setpokeImg)
//     }).catch((err)=>{
//       console.log(err)
//     })
//   })
  
//   return (
//     <PokeCard>
//       <img src={pokeImg}></img>
//     </PokeCard>
//   )
// }

// export default CardPokes