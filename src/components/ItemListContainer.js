import { useEffect, useState } from 'react';
import React from 'react';
import {getFetch} from '../helpers/Promise.js';
import ItemList from './ItemList.js';


export const imagenes = require.context('../helpers',true);

function ItemListContainer() {

const [productos,setProductos]=useState([])
const [loading,setLoading]=useState(true)


  

   useEffect(()=>{
    getFetch 
    .then (res =>setProductos(res))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
   },[]) 

// console.log(productos);

  return <div>

{loading ? <h2>Cargando ...</h2> :


productos.map((prod) =>  <ItemList key={prod.id} id={prod.id} name= {prod.name} categoria= {prod.categoria} price= {prod.price} foto= {prod.foto} />

 

 




)}



  </div>;
}

export default ItemListContainer;
