
import { useState, useEffect } from "react";
import { products } from "../../monk"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer({title}) {

  const [producto, setProducto] = useState({})
  const { id } = useParams();
  useEffect(() =>{
    const getProduct = new Promise((resolve, reject) =>{
        let idNum = parseInt(id);
        const itemFound = products.find(item => item.id === idNum );
        resolve(itemFound);
    });
    getProduct.then((resolve) =>{
      setProducto(resolve);
    })
  }, [id]);

  
  return (<>
    
    <h1 className="bg-danger">{title}</h1>
    <ItemDetail item={producto} />
    </>
  );
};
