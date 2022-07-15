
import { useState, useEffect } from "react";

import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getAnItem} from '../../services/firestore';
export default function ItemDetailContainer({ title }) {

  const [producto, setProducto] = useState({})
  const { id } = useParams();
  useEffect(() => {
    
    getAnItem(id)
    .then((resolve) => {
      setProducto(resolve);
    })
  }, [id]);


  return (<>
    <div className="text-center" >
      <h1 className="bg-danger">{title}</h1>
      <ItemDetail item={producto} />
    </div>
 
  </>
  );
};
