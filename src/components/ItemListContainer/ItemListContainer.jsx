
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ItemList } from "../ItemList/ItemList";
import RotateLoader from 'react-spinners/RotateLoader'

import { getItemOfCategory, getItems } from '../../services/firestore';

export default function ItemListContainer() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();


  useEffect(() => {

    if (categoryId) {
      getItemOfCategory(categoryId)
        .then((res) => {
          setProductos(res);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });

    } else {

      getItems()
        .then((res) => {
          setProductos(res);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoryId]);


  const styleItemListContainer = {
    backgroundColor: 'red',
    fontSize: '40px',
  };


  return (<>

    <div className="text-center container mx-auto mt-5">

      <header>
        <h1 className="titleItem text-center" style={styleItemListContainer}>Chichilo</h1>
        <p className="descriptionItem text-center" style={styleItemListContainer}></p>
      </header>


      {
        loading
          ? <div className="mx-auto h-96 flex justify-around">
            <div className="flex-1 flex justify-center items-center">
              <RotateLoader className="mx-auto align-middle" color={"rgb(217, 4, 121)"} size={20} />
            </div>
          </div>

          : <ItemList items={productos} />
      }

    </div>

  </>
  );
};
