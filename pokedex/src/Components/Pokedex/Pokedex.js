import React from "react";
import "nes.css/css/nes.min.css";
import {Card, ContainerPokedex, Tittle, Img, BtnDiv, I} from './PokedexStyled'

const PokedexPage = () => {

    let poke = ([{ name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" }])
    
    const pokemonDelete = () =>{
        console.log('deletar da lista')
    }

    const pokemonDetails = () =>{
        console.log('Ir para detalhes')
    }

    return (
        <div>
            <Tittle className="nes-text is-primary">
            Pokedex </Tittle>
            <ContainerPokedex className="nes-container is-centered">
            {poke.map(pokemon => {
                return (
                    <Card key={pokemon.name} className="nes-container is-centered">
                        {(<Img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"} />) ? 
                        <Img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"} /> :
                    <p>Carregando imagem</p> }
                        <div className="nes-text is-primary">
                            Name: {pokemon.name}
                        </div>
                        <BtnDiv>
                            <button onClick={pokemonDetails} type="button" className="nes-btn is-primary">Detalhes</button>
                            <button onClick={pokemonDelete} type="button" className="nes-btn is-warning">Warning</button>
                        </BtnDiv>
                    </Card>
                )
            })}
            </ContainerPokedex>
        </div>
    )
}

export default PokedexPage