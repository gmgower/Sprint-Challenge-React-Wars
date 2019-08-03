import React from 'react'

function StarWarsCharacter (props) {
    console.log(props)
    return (
        <div>
            {props.name}
        </div>
    )
}

export default StarWarsCharacter 
