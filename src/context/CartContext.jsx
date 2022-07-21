import { createContext, useState } from "react";


export const CartContext = createContext();



export const CartProvider = ({ children }) => {


  const [cart, setCart] = useState([]);


  const addToCart = (item, qty) => {

    if (isInCart(item.id)) {

      let index = cart.findIndex(el => el.id === item.id);
      let product = cart[index];
      product.qty = product.qty + qty;

      const newCart = [...cart];
      newCart.splice(index, 1, product);

      setCart([...newCart]);

    } else {
      setCart([...cart, { ...item, qty }]);
    }

  }

  const getQuantity = () => {

    let count = 0
    cart.forEach(prod => {
      count += prod.qty
    })

    return count
  }

  const removeItem = (id) => {
    const products = cart.filter(prod => prod.id !== id)

    setCart(products)
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  }

  const clearCart = () => {
    setCart([]);
  }

  const totalCost = () => {
    let total = 0
    cart.forEach(prod => {
      total += prod.qty * prod.price
    })

    return total
  }


  return <CartContext.Provider value={{
    cart,
    addToCart,
    isInCart,
    getQuantity,
    removeItem,
    clearCart,
    totalCost
  }}>{children}</CartContext.Provider>

}

