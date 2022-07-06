import { useState } from 'react'

function ItemCount({ stock, initial, onAdd }) {

  const [count, setCount] = useState(initial)

  function suma() {
    (count < stock)
      ? setCount(count + 1)
      : alert('Stock superado')
  }

  function resta() {
    (count > initial) && setCount(count - 1)
  }

  


  return (
    <>
      <div className="container mt-5">
        <div className="flex justify-around py-2 border-2">
          <button className="text-2xl font-bold bg-red-500 text-white py-1 px-2 rounded-md" onClick={resta}>-</button>
          <span className="m-1" >{count}</span>
          <button className="text-2xl font-bold bg-green-500 text-white py-1 px-2 rounded-md" onClick={suma}>+</button>
        </div>

        <div>
          <button onClick={() => onAdd(count)} className="mt-3 bg-blue-500 py-2 px-8 rounded-md font-bold text-white">Agregar al Carrito</button>
        </div>

      </div>
    </>
  )
}
export default ItemCount