

import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './CartWidget.css'
import { BsFillBagFill } from "react-icons/bs";


const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    return (
        <>
            <div >
                <Link to='/cart'>
                    <div className="cartQuant">
                        <BsFillBagFill />
                        { getQuantity() }
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CartWidget