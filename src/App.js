import React from "react";
import './App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={ <ItemListContainer /> } />
        <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
        <Route path='*' element={ <Navigate to={'/'} /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
