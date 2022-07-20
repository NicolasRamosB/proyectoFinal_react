import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './dropdown.css'

export const Dropdown = () => {

    const [dropdown, setDropdown] = useState(false);

    

    return (<>

       

            <ul className={dropdown ? "submenu clicked" : "submenu"} onClick={() => setDropdown(!dropdown)}>
                <li>
                    <Link className="submenu-item " to="/category/Merluza y Milanesas">Merluza</Link>
                </li>

                <li>
                    <Link className="submenu-item" to="/category/Picada Chichilo">Picadas</Link>
                </li>

                <li>
                    <Link className="submenu-item" to="/category/Entradas y Frituras">Entradas y Frituras</Link>
                </li>

                <li>
                    <Link className="submenu-item" to="/category/Mariscos">Mariscos</Link>
                </li>

                <li>
                    <Link className="submenu-item" to="/category/Postre">Postres</Link>
                </li>

                <li>
                    <Link className="submenu-item" to="/category/Menu Infantil">Menu Infantil</Link>
                </li>
            </ul>

        

    </>


    )
}
