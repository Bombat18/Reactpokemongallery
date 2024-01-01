import axios from "axios";
import { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import "./PokemonList.css"


function PokemonList() {
    const [PokemonList, setPokemonList] = useState([]);
    const [isLoding, SetLoding] = useState(true);
    const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl] = useState('')
    const [prevUrl, setPrevUrl] = useState('')


    async function dmp() {
        SetLoding(true)
        const response = await axios.get(pokedexUrl);
        const pokemoneResult = response.data.results;
      
        console.log(response);
        console.log(pokemoneResult);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        const pokemonRusultPromic = pokemoneResult.map((pokemon) => axios.get(pokemon.url));
        console.log(pokemonRusultPromic);
        const PokemonData = await axios.all(pokemonRusultPromic)
        console.log(PokemonData);
        const pokeListResult = PokemonData.map((pokeData) => {
            const pokemon = pokeData.data;

            return {
                id: pokemon.id,
                name: pokemon.name, image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default
                    : pokemon.sprites.front_shiny,
                types: pokemon.types
            }
        });
        SetLoding(false);
        setPokemonList(pokeListResult);
    };

    useEffect(() => {
        dmp();

    }, [pokedexUrl]);





    return (
        <div>
            <div className="PokemonListWrapper">

                {(isLoding) ? 'Loading' : PokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)}
            </div>
            <div className="button">
                <button disabled={prevUrl == null} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
                <button disabled={nextUrl == null} onClick={() => setPokedexUrl(nextUrl)}>Next</button>
            </div>
        </div>
    );
}
export default PokemonList;