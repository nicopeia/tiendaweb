import React from 'react';
import { useEffect, useState } from 'react';
import {getFetch} from '../helpers/Promise.js';

import { Link, useParams } from 'react-router-dom';
import ItemDetalle from './ItemDetalle.js';

function DetalleProducto() {

const [productos,setProductos] = useState({})
const {idCategoria} = useParams()
 useEffect(()=>{

getFetch
.then (data =>{
  setProductos(data.find(producto => productos.categoria === idCategoria))
})
        .catch(err => console.log(err))
        
 },[])



  return <>
<ItemDetalle productos ={productos}/>

  </>;
}

export default DetalleProducto;
