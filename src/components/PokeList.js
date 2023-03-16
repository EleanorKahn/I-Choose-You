import PokeDetailCard from "./PokeDetailCard";
import React from 'react'
import { selectAllPokemon } from "../pokeData/pokemonSlice";

const PokeList = () => {
    const allPokemon = selectAllPokemon();
    return (
        <div>
            <ul>
                {allPokemon.map(pokemon => {
                    return (
                        <li>
                            <PokeDetailCard pokemon={pokemon} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PokeList;