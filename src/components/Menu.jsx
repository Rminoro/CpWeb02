import { Link } from "react-router-dom"
import "../components/styleComponents.css"

export default function Menu(){

    return(
        <nav className="menu">
            <Link to ='/'> Home </Link>
            <span> | </span>
            <Link to = '/Produtos'>Produtos</Link>
        </nav>
    )
}