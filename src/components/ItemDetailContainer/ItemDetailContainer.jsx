
import { useState, useEffect } from "react";
import { products } from "../../monk"
import { ItemDetail } from "../ItemDetail/ItemDetail";
export default function ItemDetailContainer({title}) {

  const [producto, setProducto] = useState([])
  
  useEffect(() =>{
    const getProduct = new Promise((resolve, reject) =>{
      setTimeout(() =>{
        resolve(products[1]);
      }, 2000);
    });
    getProduct.then((resolve) =>{
      setProducto(resolve);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  
  return (<>
    
    <h1>{title}</h1>
    <ItemDetail item={producto} />
    </>
  );
};
