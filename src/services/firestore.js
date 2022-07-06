
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, getDoc, doc, query, where, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDOAI2NiTkae2LtXMmVO7UzTKpkO3sAQIM",
  authDomain: "chichilo-37e13.firebaseapp.com",
  projectId: "chichilo-37e13",
  storageBucket: "chichilo-37e13.appspot.com",
  messagingSenderId: "246339089772",
  appId: "1:246339089772:web:d21ca06555c8d0668e6f49"
};


// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);
 
export async function  getItems(){
    const productCollection = collection(appFirestore, "products");
    
    const productsSnapshot = await getDocs(productCollection);
    

    let respuesta = productsSnapshot.docs.map(doc =>{
      return{
        ...doc.data(),
        id: doc.id
      }
    } );

    

    return respuesta;
}

export async function getItemOfCategory(categoryId){

  const productCollection = collection(appFirestore, "products");

  const q = query(productCollection, (where("category", "==", categoryId)));

  const productsSnapshot = await getDocs(q);

  let respuesta = productsSnapshot.docs.map( doc => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return respuesta;
}


export async function getAnItem(id){
  // const productCollection = collection(appFirestore, "products");
  const docref = doc(appFirestore, "products", id )
  const docSnapshot = await getDoc(docref);
  return{
    ...docSnapshot.data()
  }
}



export default appFirestore;