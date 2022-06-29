import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({ item, stock }) => {

  const { addToCart } = useContext(CartContext)

  const [cant, setCant] = useState(0);

  const onAdd = (quantity) => {
    setCant(quantity);

    addToCart( item, quantity );
  }


  return (
    <>
      <div className=" container d-flex flex-wrap" >

        <h1>{item.name}</h1>
        <img src={item.img} alt="Imagen" />
        <p>${item.price}</p>
        <p>{item.description}</p>

        {(cant === 0)
          ? <ItemCount onAdd={onAdd} stock={12} initial={1} />
          : <Link to="/cart">Ir al Carrito</Link>
        }

       

      </div>

    </>
  )
}

