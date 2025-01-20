import "./Navbar.css"
import { Link } from "react-router-dom"
import { BsBook } from "react-icons/bs";
import Search from "../search";

export default function Navbar() {
    const iconStyle = {
        color: "#000", // Cor dos ícones
        width: "100%", // Usar 100% do tamanho do contêiner
        height: "100%", // Garantir proporção
    };
    
    return (
        <nav className="navbar">
            <Link to={"/"}>
                <BsBook className="icon"/>
            </Link>
            <Search className="pesquisa" maxWidth='20em' minWidth='12em'/>
        </nav>
    )
}