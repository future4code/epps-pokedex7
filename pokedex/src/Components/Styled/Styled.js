import styled from "styled-components";

export const Cardpoke = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-direction: row;
`

export const DivPokemon = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 10px;
`

export const Card = styled.div` 
  width: 500px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  margin: auto;
  text-align: center;
  margin-top: 100px;
  color: black;
`

export const divBotao = styled.div`
  width: 100%;
`

export const Imagem = styled.img`
    width: 100%;
    height: 100px;
    object-fit: cover;
    margin: 0px;
    padding: 0px;
`

