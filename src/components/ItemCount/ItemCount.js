import React, { useState } from 'react';
import { button } from 'react-bootstrap';


 


function ItemCount({initial,stock,onAdd}) {
  
const [contador,setContador] = useState(initial)

const handleAumentar= ()=>{

  if(contador < stock){

    setContador(contador+1)
  }
  

}

const handleRestar= ()=>{
  if(contador > initial){

    setContador(contador-1)
  }
}

const agregarCarrito  = () =>{
onAdd(contador)
    }


  return <div className='container w-50'>
<button className='btn btn-outline-primary btn-block' onClick={handleAumentar}>+</button>
{contador}
<button className='btn btn-outline-primary btn-block' onClick={handleRestar}>-</button>
<br></br><br></br>
<button onClick={agregarCarrito} className="btn btn-primary btn-block">
        Agregar a carrito
            </button>  
  </div>;
}

export default ItemCount;

