import React, {useEffect, useContext} from "react"
import Header from "../../Header/Header"
import GlobalStateContext from "../../Global/GlobalStateContext";


const DetailsPage = () => {
    const { states, setters, requests } = useContext(GlobalStateContext);

    useEffect(()=>{
        setters.setPokedexPage(false)
    })
    return (
        <div>
            <p>Details</p>
            <p>
            Poderes
            hp: 60
            attack: 62
            defense: 63
            special-attack: 80
            special-defense: 80
            speed: 60
            </p>
        </div>
    )
}

export default DetailsPage