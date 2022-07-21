import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import './ItemDetail.css'


export const ItemDetail = ({ item }) => {

  const MySwal = withReactContent(Swal);
  let Toast;
  const { addToCart } = useContext(CartContext)
  const [cant, setCant] = useState(0);

  const onAdd = (quantity) => {

    setCant(quantity);
    addToCart(item, quantity);

    if (onAdd) {

      Toast = MySwal.mixin({
        toast: true,
        position: 'top-end',
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Se agrego ' + item.name + 'al carrito'
      })

    }
  }




  return (
    <>
      <div className=" m-10" >

        <div className=" bg-gray-300 rounded-lg flex items-center justify-center">

          <div className="  flex flex-wrap justify-center ">
            <img className="img-detail" src={item.img} alt={item.name} />
          </div>

          <div className=" bg-white w-6/12 m-20 ">

            <h3 className="text-3xl text-gray-900 mt-2 mb-4 font-medium title-font">
              {item.name}
            </h3>

            <p className="mt-5 mb-3 text-xs text-gray-500">{item.description}</p>
            <p className="mt-4 text-green-700 text-md font-bold">$ {item.price}</p>

            {(cant === 0)
              ? <ItemCount onAdd={onAdd} stock={item.stock} initial={1} />

              : <div className="m-5">
                <Link className="bg-green-500 p-3  rounded-md font-bold text-white" to="/cart">Ir al Carrito</Link>
              </div>
            }


          </div>

        </div>

      </div>

    </>
  )
}

