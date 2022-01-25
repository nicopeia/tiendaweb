import React from 'react';
import {useState, useEffect} from 'react';

function Contenedor() {
  
   // let count = 0
    const [count, setCount]= useState(0)
    const [fecha, setFecha] = useState(Date)

  const aumentar = () =>{
   setCount(count+1)
   setFecha(Date())
  }
  

  useEffect(()=>{

    
  })
  
    return <div>

 
 
   <h3>contador: {count}</h3>
   <h3>fecha: {fecha}</h3>
   <button onClick={aumentar}> Aumentar</button>

    </div>;
}

export default Contenedor;
