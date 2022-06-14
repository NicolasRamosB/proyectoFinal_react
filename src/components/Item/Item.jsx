import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({img, name, price}) => {
  return (
    <>
    <div>
        <h1>{name}</h1>
        <img src={img} alt="Imagen" />
        <p>${price}</p>
        

        <ItemCount stock={12} initial={1} />

    </div>
    </>
  )
}

export default Item