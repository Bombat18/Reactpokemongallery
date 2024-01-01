import Search from "./Search";
import './Pokedex.css';
import PokemonList from "./PokemonList";
function Pokedex() {
    return (
        <div className="Pokedex-wrapper">
            <h1 className="Pokedex-heading">Pokedex</h1>
            <Search />
            <PokemonList />
        </div>
    );
}
export default Pokedex;