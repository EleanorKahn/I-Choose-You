import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, Button } from "reactstrap";
import "./css/style.css";
import PokeDetailCard from './components/PokeDetailCard';
import { POKEMON } from './pokeData/POKEMON';

function App() {
  const [havePoke, setHavePoke] = useState(false);

  const fetchPoke = () => {
    console.log("I will fetch the pokemon inside the useEffect hook", havePoke);
  }

  return (
    <Container className='view'>
      <h1>The PokeAPI App</h1>
      <div>
        <p>Choose your fighters!</p>
        <Button 
          onClick={(e) => {
            setHavePoke(true);
            fetchPoke(havePoke);
          }}
        >
          Choose!
        </Button>
      </div>
      {havePoke && 
        <div>
          <ul className='pokeList'>
            {POKEMON.map((pokemon, idx) => {
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
