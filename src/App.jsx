import  React  from "react";
import NavBar from './components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";


function App( id ) {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <NavBar key={id}/>
      <Routes>
        
      <Route path="/" element={
        <ItemListContainer title="Churros Manolo" description="Las mejores churros de Mar del Plata"/>
      } />
      
      <Route path="/category/:categoryId" element={
        <ItemListContainer title="Categoria" />
      } />

      <Route path="/cart" element={
        <Cart/>
      } />
     
       <Route path="/item/:id" element={
        <ItemDetailContainer title="Detalle"/>
      } />
      
      </Routes>
      <Footer/>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
