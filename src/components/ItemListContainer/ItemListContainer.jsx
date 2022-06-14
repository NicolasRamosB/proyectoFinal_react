
import { useState, useEffect } from "react";
import { products } from "../../monk"
import { ItemList } from "../ItemList/ItemList";

export default function ItemListContainer({title, description}) {

  const [productos, setProductos] = useState([])
  
  useEffect(() =>{
    const getProducts = new Promise((resolve, reject) =>{
      setTimeout(() =>{
        resolve(products);
      }, 2000);
    });
    getProducts.then((resolve) =>{
      setProductos(resolve);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

    const styleItemListContainer = {
        backgroundColor: 'red',
        fontSize: '40px',   
    };

  return (<>

    <h1 className="titleItem" style={styleItemListContainer}>{title}</h1>
    <p className="descriptionItem" style={styleItemListContainer}>{description}</p>
    
    <ItemList items={productos} />

    
    </>
  );
};
