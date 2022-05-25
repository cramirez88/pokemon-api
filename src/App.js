// Create a list of the pokemon from the API
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => response.data)
    .then(response => setPokemon(response.results))
    .catch((err) => {
      console.log(err)
    })
  }, [])


  return (
  <div>
    {pokemon.map((poke, index) =>  (<li key={index}> {poke.name}</li>)
    )}
  </div>
  );
}

export default App;
