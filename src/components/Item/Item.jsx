import React from 'react'
import { Link } from 'react-router-dom';
import './item.css'

const Item = ({id, img, name, price}) => {
  const urlDetalle = `/item/${id}`
  return (
    <>
    <div >
    <Link to={urlDetalle} >
    <div className="mb-5 py-3 text-center card-container p-3">
        <h1 className="text-3xl text-gray-900 mt-2 mb-4 font-medium title-font">{name}</h1>
        <img className="w-80 h-80 object-cover" src={img} alt="Imagen" />
        <p className="mt-4 text-green-700 text-md font-bold" >${price}</p>
        
    </div>
    </Link>

    </div>
   
    </>
  )
}

export default Item