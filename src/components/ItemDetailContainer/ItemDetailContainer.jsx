
import { useState, useEffect } from "react";

import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getAnItem} from '../../services/firestore';
import RotateLoader from "react-spinners/RotateLoader";
export default function ItemDetailContainer({ title }) {

  const [loading, setLoading] = useState(true);

  const [producto, setProducto] = useState({})
  const { id } = useParams();
  useEffect(() => {
    
    getAnItem(id)
    .then((resolve) => {
      setProducto(resolve);
      setLoading(false);
    })
  }, [id]);


  return (<>
  
    <div className="text-center" >
      <h1 className="bg-danger">{title}</h1>
      {
        loading 
        ? <div className="mx-auto h-96 flex justify-around">
        <div className="flex-1 flex justify-center items-center">
          <RotateLoader className="mx-auto align-middle" color={"rgb(217, 4, 121)"} size={20} />
        </div>
      </div>
        :<ItemDetail item={producto} />
      }
    </div>
 
  </>
  );
};
