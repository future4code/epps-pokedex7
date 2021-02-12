import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../../Bases/urls";
import { useRequestData } from "../../Hooks/useRequestData";
import {Card} from '../../Styled/Styled';
import {goToPokedex} from '../../../Router/Coordinator';

const QuebraLinha = styled.div`
  width: 100%;
`

const DetailsPage = () => {
  const pathParams = useParams();
  const getDetails = useRequestData(`${BASE_URL}/${pathParams.id}`, undefined);
  const history = useHistory()

  return (
    <Card>
      <QuebraLinha>
        {getDetails && (
          <QuebraLinha>
            <img src={getDetails.sprites.front_default}/>
            <img src={getDetails.sprites.back_default}  />
          </QuebraLinha> 
        )}
       </QuebraLinha> 


       <QuebraLinha> 
            <h3>Meu tipo</h3>
            {getDetails &&
              getDetails.types.map((type) => {
                return (
                  <QuebraLinha>
                    <p>Meu poder é: {type.type.name}</p>
                  </QuebraLinha>
                );
              })}

      </QuebraLinha> 

        <QuebraLinha>
            <h3>Estatísticas</h3>
            {getDetails &&
              getDetails.stats.map((stat) => {
                return (
                  <QuebraLinha>
                    <p>Meu {stat.stat.name} é {stat.base_stat}</p>
                  </QuebraLinha>
                );
              })}

      </QuebraLinha>

      <QuebraLinha>
            <h3>Meus 5 movimentos são</h3>
            {getDetails &&
              getDetails.moves.map((move, num) => {
                return num < 5 && <p>{move.move.name}</p>;
              })}
      </QuebraLinha>
      <button type="button" class="nes-btn is-warning" onClick={()=>goToPokedex(history)}>Voltar</button>
    </Card>
  )
}

export default DetailsPage;