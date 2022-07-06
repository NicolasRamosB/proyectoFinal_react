import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({id, img, name, price}) => {
  const urlDetalle = `/item/${id}`
  return (
    <>
    <div className="mb-5 py-3 text-center ">
        <h1 className="text-3xl text-gray-900 mt-2 mb-4 font-medium title-font">{name}</h1>
        <img className="w-80 h-80 object-cover" src={img} alt="Imagen" />
        <p className="mt-4 text-green-700 text-md font-bold" >${price}</p>
        
        

        <Link to={urlDetalle} >
          <button className="buttonDetail btn btn-primary btn-lg">Ver detalle</button>
        </Link>

    </div>
    </>
  )
}

export default Item