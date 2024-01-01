import { Routes ,Route} from "react-router-dom";
import Pokedex from "../Component/Pokedex";
import PokemonDetils from "../Component/PokemonDetails";


function CoustamRoutes(){
    return( 
<Routes>
<Route path="/" element={<Pokedex/>}/>
<Route path="/pokemon/:id" element={<PokemonDetils/>}/>
<Route />
</Routes>
    )
}
export default CoustamRoutes;