import React from 'react';
import { useEffect, useState } from 'react';
import {getFetch} from '../helpers/PromiseDetalleProducto';
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
  

  </>;
}

export default DetalleProducto;
export const imagen = require.context('../helpers',true);