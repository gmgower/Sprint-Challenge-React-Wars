import React, {useState, useEffect} from 'react';
import './App.css';

import StarWarsCharacter from './components/StarWarsCharacter.component';

import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [dataState, setDataState] = useState([])


useEffect(() => {
  axios.get("https://swapi.co/api/people")
  .then(res => {
    console.log(res.data)
    setDataState(res.data.results)
        })
}, [])



 
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <div>
     {dataState.map(data =>
    <StarWarsCharacter name={data.name} />

    )}   
    </div>
    </div>

);
}

export default App;
