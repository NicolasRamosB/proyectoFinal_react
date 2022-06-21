import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({id, img, name, price}) => {
  const urlDetalle = `/item/${id}`
  return (
    <>
    <div className="container card justify-content-center">
        <h1 className="itemName text-center">{name}</h1>
        <img className="itemImg container" src={img} alt="Imagen" />
        <p className="itemPrice text-center" >${price}</p>
        
        

        <Link to={urlDetalle} >
          <button className="buttonDetail btn btn-primary btn-lg">Ver detalle</button>
        </Link>

    </div>
    </>
  )
}

export default Item