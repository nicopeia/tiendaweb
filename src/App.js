import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import NavbarMenu from './components/Navbar/NavbarMenu';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart/Cart';
import DetalleProducto from './components/DetalleProducto';
import Contacto from './components/Contacto/Contacto';


function App() {


  return (
    <BrowserRouter>
   
    <div className="App">
    
   
    <NavbarMenu/>
   
   
   <Routes>
     <Route path='/tiendaweb' element={ <ItemListContainer/> }/>
     <Route path='/tiendaweb/categoria/:idCategoria' element={ <ItemListContainer/> }/>
     <Route path='/tiendaweb/cart' element={   <Cart/>   }/>
     <Route path='/tiendaweb/DetalleProducto/:idProducto' element={   <DetalleProducto/>   }/>
     <Route path='/tiendaweb/contacto' element={ <Contacto/> }/>
    </Routes>
    </div>
    </BrowserRouter>


)
}

export default App;


   
  



