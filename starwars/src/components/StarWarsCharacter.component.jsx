import React from 'react';
import './StarWars.styles.css';
import {} from 'semantic-ui-react';
import styled from 'styled-components';
import './StarWars.styled.js';

function StarWarsCharacter(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <ul>
        <li>{props.birth}</li>
        <li>{props.gender}</li>
        <li>{props.eye}</li>
        <li>{props.hair}</li>
        <li>{props.height}</li>
        <li>{props.mass}</li>
        <li>{props.skin}</li>
      </ul>
    </div>
  );
}

export default StarWarsCharacter;
