import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"
import { Link } from 'react-router-dom';

export default function NavBar() {

    return (
        <>
            <nav className="Navbar">

                <ul className="Ul-navbar"  >

                    <li>
                        <Link to="/" className="text-center">Inicio</Link>
                    </li>

                    <li>
                        <Link to="/category/Dulce de Leche">Dulce de Leche</Link>
                    </li>

                    <li>
                        <Link to="/category/Chocolate">Chocolate</Link>
                    </li>

                    <li>
                        <Link to="/category/Pastelera">Pastelera</Link>
                    </li>

                    <CartWidget/>
                        
                   
                </ul>

            </nav>
        </>
    )
}