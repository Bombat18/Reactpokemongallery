import { Link } from "react-router-dom";
import "./Pokemon.css"
Link
function Pokemon({name,image,id}){
    return (
        <div className="pokemon">
            <Link to={`/pokemon/${id}`} >
            <div className="name">{name}</div>
            <div><img className="pokemon-img" src={image} /></div>
</Link  >
        </div>
    )
}
export default Pokemon;