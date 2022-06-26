import { useState } from 'react'

function ItemCount({stock, initial, onAdd}) {

    const [ count, setCount ] = useState(initial)

    function suma() {
      if (count < stock) {
        setCount(count + 1)
      }else{
        alert('Stock superado')
      }
    }

    function resta() {
      if (count > initial) {
        setCount(count - 1)
      }
    }

    

  return (
    <>
    <div>
      <div className="d-flex card justify-content-center align-items-center flex-row m-2 p-2">
      <button className="m-1 p-2 btn btn-danger" onClick={resta}>-</button>
        <span className="m-1" >{count}</span>
        <button className="m-1 p-2 btn btn-success" onClick={suma}>+</button>
      </div>
    
        <div>
        <button onClick={()=>onAdd(count)} className="btn btn-primary">Agregar al Carrito</button>
        </div>

    </div>
    </>
  )
}
export default ItemCount