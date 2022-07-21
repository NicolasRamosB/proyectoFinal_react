import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ItemCount({ stock, initial, onAdd }) {

  const MySwal = withReactContent(Swal)
  const [count, setCount] = useState(initial)


  function suma() {

    (count < stock)
      ? setCount(count + 1)
      : MySwal.fire(
        'Stock superado',
        'No puede superar la cantidad estimada.',
        'warning',
      )

  }

  function resta() {

    (count > initial) && setCount(count - 1)

  }




  return (
    <>
      <div className="container mt-5">

        <div className="flex justify-evenly items-center p-2 border-2">
          <button className="text-2xl font-bold bg-red-500 text-white py-0 px-2 rounded-md" onClick={resta}>-</button>
          <span className="text-xl font-extrabold" >{count}</span>
          <button className="text-2xl font-bold bg-green-500 text-white py-1 px-2 rounded-md" onClick={suma}>+</button>
        </div>

        <div>
          <button onClick={() => onAdd(count)} className="m-3 bg-blue-500 py-2 px-8 rounded-md font-bold text-white">Agregar al Carrito</button>
        </div>

      </div>
    </>
  )
}
export default ItemCount