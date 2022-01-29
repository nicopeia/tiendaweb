import React from 'react';
import { useEffect, useState } from 'react';
import {getFetch} from '../helpers/Promise.js';

import { Link, useParams } from 'react-router-dom';
import ItemDetalle from './ItemDetalle.js';

function DetalleProducto() {

const [producto,setProducto] = useState([])
const {idProducto} = useParams()
 useEffect(()=>{

getFetch
.then (res =>setProducto(res.find(producto => producto.id === idProducto)))
  

        .catch(err => console.log(err))
        
 },[idProducto])



  return <>
<ItemDetalle producto ={producto}   name= {producto.name} categoria= {producto.categoria} />

  </>;
}

export default DetalleProducto;
