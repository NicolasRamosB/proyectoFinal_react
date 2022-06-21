import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"
import { BsFillBagFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { products } from '../../monk';

export default function NavBar (){
    
    const categories = products.map((itemCategory) => itemCategory.category);

    return(
        <>
        <nav className="Navbar">

            <ul className="Ul-navbar"  >

                    <li>
                       <Link to="/" className="text-center">Inicio</Link>
                    </li>
                    
                
                {
                    categories.map(categoryTitle => 
                    <li key={categoryTitle}>
                        <Link className="text-center" to={`category/${categoryTitle}`}>{categoryTitle}</Link>
                        
                    </li>
                     )
                }
                
                
                <CartWidget>
                <BsFillBagFill/>
                </CartWidget>
            </ul>

        </nav>
        </>
    )
}