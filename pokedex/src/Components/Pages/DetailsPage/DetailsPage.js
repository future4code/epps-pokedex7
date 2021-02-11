import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../../Bases/urls";
import { useRequestData } from "../../Hooks/useRequestData";
import {useState} from 'react';
import {Card, divBotao} from '../../Styled/Styled';
import HeaderImagem from '../../../imagens/img0.jpg'

const CaixaImagem = styled.div`
    width: 100%;
`

const QuebraLinha = styled.div`
    width: 100%;
`

const ImagemTeste = styled.img`
    object-fit: cover;
    width: 500px;
    height: 100px;
`

const DetailsPage = () => {
  const pathParams = useParams();
  const getDetails = useRequestData(`${BASE_URL}/${pathParams.id}`, undefined);
  const [pokemon, setPokemon] = useState([])

  return (
      <Card>
        <ImagemTeste src={HeaderImagem}/>
        {getDetails && (
          <CaixaImagem>
            <img src={getDetails.sprites.front_default}/>
            <img src={getDetails.sprites.back_default} onMouseOut/>
          </CaixaImagem>
        )}

          <QuebraLinha>
          <h3>Meu poder é</h3>
            {getDetails &&
              getDetails.types.map((type) => {
                return (
                  <p>Meu poder é {type.type.name}</p>
                )
              })}
          </QuebraLinha>

          <QuebraLinha>
            <h3>Estastiticas</h3>
            {getDetails &&
              getDetails.stats.map((stat) => {
                return (
                  <div>
                      <p>Minha {stat.stat.name} é de {stat.base_stat}</p>
                  </div>
                )
              })}
          </QuebraLinha>

          <QuebraLinha>
            <h3>Meus 5 tipos de ataques são</h3>
              {getDetails &&
              getDetails.moves.map((move, num) => {
                return num < 5 && <p>{move.move.name}</p>;
              })}
          </QuebraLinha>

      </Card>
  );
};

export default DetailsPage;