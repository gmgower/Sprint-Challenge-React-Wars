import React from 'react'

function StarWarsCharacter (props) {
    console.log(props)
    return (
        <div>
            <h1>
            {props.name}
            </h1>
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
    )
}

export default StarWarsCharacter 
