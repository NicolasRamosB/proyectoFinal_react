import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"
import { Dropdown } from "./Dropdown/Dropdown";
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function NavBar() {

    const [dropdown, setDropdown] = useState(false)

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

                    <li  onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                        <Link to="/"  className="linkNav text-center ">Platos</Link>
                        { dropdown && <Dropdown/>}
                    </li>


                    
                
                    <CartWidget />
                        
                </ul>

            </nav>
            
        </>
    )
}