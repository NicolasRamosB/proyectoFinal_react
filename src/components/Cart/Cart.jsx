import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

import Modal from '../Modal/Modal';

const Cart = () => {

  const [modalForm, setModalForm] = useState(false);
  const { cart, removeItem, clearCart, totalCost } = useContext(CartContext);


  if (cart.length === 0) {
    return (
      <>
        <main className="h-screen">
          <div className="bg-orange-100 h-screen">
            <h1 className="text-center font-medium text-red-800 text-4xl p-40">El carrito esta vacio</h1>
            <div className="flex justify-center p-7">
              <Link to="/" className="bg-yellow-600 py-4 px-10 text-4xl rounded-md font-bold text-white mt-5" >
                Volver al Inicio
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <main className="h-screen">
        <div className=" m-10 mx-auto flex justify-center sm:flex-wrap flex-wrap">

          {
            cart.map((item) => (

              <div className="bg-gray-200 rounded-lg mt-3 overflow-hidden w-64 sm:mr-10 p-10 flex items-center justify-center" key={item.id}>
                <div className="mb-5 py-3 text-center">
                  <h1 className="text-3xl text-gray-900 mt-2 mb-4 font-medium title-font">{item.name}</h1>

                  <p className="mt-4 text-green-700 text-md font-bold" >${item.price}</p>

                  <p>
                    Subtotal:{" "}
                    <span className="text-green-600">
                      ${item.price * item.qty}
                    </span>
                  </p>

                  <button
                    onClick={() => { removeItem(item.id) }}
                    className="bg-red-500 py-2 px-8 rounded-md font-bold text-white mt-5"> X </button>

                  <p>Cantidad: {item.qty}</p>

                </div>
              </div>

            ))
          }
        </div>

        <div >
          <div className="flex flex-col justify-center items-center container-fluid bg-orange-400">
            <p className="total p-10 text-4xl bg-orange-500 mt-10 rounded-md">Precio Total: <span className="text-green-800 font-bold">${totalCost()}</span></p>
            <div>
              <button onClick={clearCart} className="bg-red-600 py-2 px-8 rounded-md font-bold text-white m-5">Vaciar Carrito</button>
              <button onClick={() => setModalForm(!modalForm)} className="bg-green-600 py-2 px-8 rounded-md  m-5 font-bold text-white mt-5">Comprar</button>
            </div>
          </div>
          <Modal modalForm={modalForm} setModalForm={setModalForm} />
        </div>
      </main>
    </>
  )
}

export default Cart
