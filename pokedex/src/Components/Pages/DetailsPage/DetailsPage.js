import React, {useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BASE_URL } from "../../Bases/urls";
import { useRequestData } from "../../Hooks/useRequestData";
import GlobalStateContext from "../../Global/GlobalStateContext";

const DetailsContainer = styled.div``;

const ImgContainer = styled.div``;

const TypeContainer = styled.div``;

const StatsContainer = styled.div``;

const MovesContainer = styled.div``;

const InfosContainer = styled.div``;

const DetailsPage = () => {
  const pathParams = useParams();
  const getDetails = useRequestData(`${BASE_URL}/${pathParams.id}`, undefined);
  const { states, setters, requests } = useContext(GlobalStateContext);


  useEffect(()=>{
    setters.setPokedexPage(false)
})


  return (
    <div>
      <DetailsContainer>
        {getDetails && (
          <ImgContainer>
            <img src={getDetails.sprites.front_default}/>
            <img src={getDetails.sprites.back_default}  />
          </ImgContainer>
        )}

        <InfosContainer>
          <TypeContainer>
            <h3>Type</h3>
            {getDetails &&
              getDetails.types.map((type) => {
                return (
                  <div>
                    <p>{type.type.name}</p>
                  </div>
                );
              })}
          </TypeContainer>

          <StatsContainer>
            <h3>Stats</h3>
            {getDetails &&
              getDetails.stats.map((stat) => {
                return (
                  <div>
                    <p>
                      <strong>{stat.stat.name}:</strong> {stat.base_stat}
                    </p>
                  </div>
                );
              })}
          </StatsContainer>

          <MovesContainer>
            <h3>Moves</h3>
            {getDetails &&
              getDetails.moves.map((move, num) => {
                return num < 5 && <p>{move.move.name}</p>;
              })}
          </MovesContainer>
        </InfosContainer>
      </DetailsContainer>
    </div>
  );
};

export default DetailsPage;

