import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { CartProvider } from "./context/CartContext";

import Cart from "./components/Cart/Cart";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer";


function App(id) {
  return (
    <div className="App mx-auto">

      <CartProvider>

        <BrowserRouter>

          <NavBar key={id} />

          <Routes>

            <Route path="/" element={
              <ItemListContainer />
            } />

            <Route path="/category/:categoryId" element={
              <ItemListContainer />
            } />

            <Route path="/cart" element={
              <Cart />
            } />

            <Route path="/item/:id" element={
              <ItemDetailContainer />
            } />

          </Routes>

          <Footer />

        </BrowserRouter>

      </CartProvider>

    </div>
  );
}

export default App;
