import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const { cart, removeItem, clearCart, totalCost } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <div>

          <h1 className="text-center">El carrito esta vacio</h1>
          <Link to="/" className="buttonDetail btn btn-warning btn-lg" >
            Volver al Inicio
          </Link>

        </div>
      </>
    )
  }

  return (
    <div key={cart.id}>
      {
        cart.map((item) => (
          <div className="container card justify-content-center">
            <h1 className="itemName text-center">{item.name}</h1>
            <img className="itemImg container" src={item.img} alt="Imagen" />
            <p className="itemPrice text-center" >${item.price}</p>

            <button onClick={() => { removeItem(item.id) }} className="buttonDetail btn btn-danger btn-lg">X</button>

            <p>Cantidad: {item.qty}</p>
          </div>
        ))


      };

      <p className="total">Total de la compra: ${totalCost()}</p>

      <button onClick={clearCart} className="buttonDetail btn btn-danger btn-lg">Vaciar Carrito</button>

      <button className="buttonDetail btn btn-success btn-lg">Comprar</button>
    </div>
  )
}

export default Cart
