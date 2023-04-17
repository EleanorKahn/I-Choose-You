import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, Button } from "reactstrap";
import "./css/style.css";
import PokeDetailCard from './components/PokeDetailCard';

function App() {
  const [pokeReq, setPokeReq] = useState(false);
  const [data, setData] = useState(null);
  
  const request = "https://pokeapi.co/api/v2/pokemon?limit=6";

  const fetchPoke = () => {
    console.log("I will fetch the pokemon inside the useEffect hook", pokeReq);
    fetch(request)
      .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response;
    })
    .then((response) => response.json())
    .then((fetchedData) => {
      setData(fetchedData.results);
    })
    .catch((error) => {
      alert(`Could not display pokemon: ${error}`);
    });
    console.log(data);
  };

  useEffect(() => fetchPoke(), [pokeReq]);

  return (
    <Container className='view'>
      <h1>The PokeAPI App</h1>
      <div>
        <p>Choose your fighters!</p>
        <Button 
          onClick={() => {
            setPokeReq(true);
          }}
        >
          Choose!
        </Button>
      </div>
      {/* ensures that useEffect won't actually change the UI on either the
      initial load, or before the user has pressed the button */}
      {pokeReq &&
        <div>
          <ul className='pokeList'>
            {data.map((pokemon, idx) => {
              return (
                <li key={idx}>
                  <PokeDetailCard pokemon={pokemon} />
                </li>
              );
            })}
          </ul>
        </div>
      }
    </Container>
  );
};

export default App;
