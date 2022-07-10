import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"
import { Link } from 'react-router-dom';

export default function NavBar() {

    return (
        <>
            <nav className="Navbar">

                <ul className="Ul-navbar"  >

                    <li className="linkBrand">
                        <Link to="/" ><img src="https://i.ibb.co/gwpXq3P/iconochichilo1.png" alt="brand" className="brand" /></Link>
                    </li>

                    <li>
                        <Link to="/" className="linkNav text-center">Inicio</Link>
                    </li>

                    <li>
                        <Link className="linkNav" to="/category/Merluza y Milanesas">Merluza</Link>
                    </li>

                    <li>
                        <Link className="linkNav" to="/category/Picada Chichilo">Picadas</Link>
                    </li>

                    <li>
                        <Link className="linkNav" to="/category/Entradas y Frituras">Entradas y Frituras</Link>
                    </li>

                    <li>
                        <Link  className="linkNav" to="/category/Mariscos">Mariscos</Link>
                    </li>

                    <li>
                        <Link  className="linkNav" to="/category/Postre">Postres</Link>
                    </li>

                    <li>
                        <Link  className="linkNav" to="/category/Menu Infantil">Menu Infantil</Link>
                    </li>

                    <CartWidget />
                        
                   
                </ul>

            </nav>
        </>
    )
}