import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail = ({item}) => {
  return (
    <>
    <div className=" container d-flex flex-wrap" >

        <h1>{item.name}</h1>
        <img src={item.img} alt="Imagen" />
        <p>${item.price}</p>
        <p>{item.description}</p>

        <ItemCount stock={12} initial={1} />
        
    </div>
    </>
  )
}

