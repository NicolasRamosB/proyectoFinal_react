import { createContext, useState } from "react";

// 1- Creo el Contexto para exportarlo
export const CartContext = createContext();


// 2- Creo la funcion
export const CartProvider = ({ children }) => {

  // Estado
  const [cart, setCart] = useState([]);



  // Añadir al carrito.
  const addToCart = (item, qty) => {

    if (isInCart(item.id)) {
      let index = cart.findIndex(el => el.id === item.id);
      let product = cart[index];
      product.qty = product.qty + qty;

      const newCart = [...cart];
      newCart.splice(index, 1, product);

      setCart([...newCart]);

      console.log(newCart);
    } else {

      setCart([...cart, { ...item, qty }]);
     
    }

  }


  // Contador de productos en CartWidget
  const getQuantity = () => {
    let count = 0
    cart.forEach(prod => {
      count += prod.qty
    })
    return count
  }

  // Eliminar Item.
  const removeItem = (id) => {
    const products = cart.filter(prod => prod.id !== id)
    setCart(products)
  }

  // Contador de productos añadidos
  const getQuantityProd = (id) => {
    return cart.find(prod => prod.id === id)?.qty
  }


  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  }

  // Vaciar carrito.
  const clearCart = () => {
    setCart([]);
  }
  // Calculo Total de la compra (Cantidad x recio)
  const totalCost = () => {
    let total = 0
    cart.forEach(prod => {
      total += prod.qty * prod.price
    })

    return total
  }

  // Funcion.
  return <CartContext.Provider value={{ cart, addToCart, isInCart, getQuantity, getQuantityProd, removeItem, clearCart, totalCost }}>{children}</CartContext.Provider>


}

