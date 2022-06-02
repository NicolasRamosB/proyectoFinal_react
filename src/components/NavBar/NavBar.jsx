import CartWidget from "../CartWidget/CartWidget";
import NavLink from "../NavLink/NavLink"
import "./NavBar.css"
import { BsFillBagFill } from "react-icons/bs";

export default function NavBar (){
    
    function handleClick(){
        console.log("click");
    }
    
    return(

        <nav className="navbar">

            <ul className="ul-navbar">

                <NavLink handleClick={handleClick} title="Inicio"/>
                <NavLink handleClick={handleClick} title="Productos"/>
                <NavLink handleClick={handleClick} title="¿Quienes somos?"/>
                <CartWidget handleClick={handleClick}>
                <BsFillBagFill/>
                </CartWidget>
            </ul>

        </nav>

    )
}