import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { createBuyOrder } from '../../services/firestore';

export const Form = () => {

    const { cart, clearCart, totalCost } = useContext(CartContext);

    const [buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: "",
    },
    )

    const handleChange = (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;
        setBuyer({...buyer, [field]: value});
    }

    function handleBuyOrder(evt) {
        evt.preventDefault();
        const dataOrder = {
            buyer,
            items: cart,
            total: totalCost()
        }

        createBuyOrder(dataOrder).then((orederDataCreated) => {
            clearCart();
            alert("Ticket de compra: " + orederDataCreated.id);
        });


    }

    return (
        <div>
            <form>
                <label htmlFor="name">Nombre</label>
                <input onChange={handleChange} type="text" name="name" />

                <label htmlFor="phone">Telefono</label>
                <input onChange={handleChange} type="phone" name="phone" />

                <label htmlFor="email">Email</label>
                <input onChange={handleChange} type="email" name="email" />

                <button onClick={handleBuyOrder} className="bg-green-500 py-2 px-8 rounded-md font-bold text-white mt-5">Comprar</button>
            </form>
        </div>
    )
}
