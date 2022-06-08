import { useState } from 'react'

function ItemCount({stock, initial}) {
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
    <div>
        <button onClick={resta}>-</button>
        <span>{count}</span>
        <button onClick={suma}>+</button>
        <button>Agregar al Carrito</button>

    </div>
  )
}
export default ItemCount