import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const { cart, removeItem, clearCart, totalCost } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <>
        <div >

          <h1 className="text-center">El carrito esta vacio</h1>
          <div className="" >
          <Link to="/" className="bg-yellow-500 py-2 px-8 rounded-md font-bold text-white mt-5" >
            Volver al Inicio
          </Link>

          </div>
          
        </div>
      </>
    )
  }

  return (
    <>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap" key={cart.id}>
        {
          cart.map((item) => (
            <div className="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <div className="mb-5 py-3 text-center">
                <h1 className="text-3xl text-gray-900 mt-2 mb-4 font-medium title-font">{item.name}</h1>
                
                <p className="mt-4 text-green-700 text-md font-bold" >${item.price}</p>

                <button onClick={() => { removeItem(item.id) }} className="bg-red-500 py-2 px-8 rounded-md font-bold text-white mt-5">X</button>
                <p>Cantidad: {item.qty}</p>
              </div>


            </div>
          ))


        }

      </div>

      <div>
        <p className="total">Total de la compra: ${totalCost()}</p>

        <button onClick={clearCart} className="bg-red-500 py-2 px-8 rounded-md font-bold text-white mt-5">Vaciar Carrito</button>

        <button className="bg-green-500 py-2 px-8 rounded-md font-bold text-white mt-5">Comprar</button>
      </div>
    </>
  )
}

export default Cart
