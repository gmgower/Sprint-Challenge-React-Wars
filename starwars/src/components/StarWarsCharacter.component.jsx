import React from 'react';
import './StarWars.styles.css';
import {} from 'semantic-ui-react';
import { StyledCardContainer } from './StarWars.styled.js';

function StarWarsCharacter(props) {
  console.log(props);
  return (
    <StyledCardContainer>
      <h1>
          {props.name}
      </h1>
      <ul>
        <li>Birth: {props.birth}</li>
        <li>Gender: {props.gender}</li>
        <li>Eyes: {props.eye}</li>
        <li>Hair: {props.hair}</li>
        <li>Height: {props.height}cm</li>
        <li>Mass: {props.mass}kg</li>
        <li>Skin: {props.skin}</li>
      </ul>
    </StyledCardContainer>
  );
}

export default StarWarsCharacter;
