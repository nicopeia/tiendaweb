import React from 'react';

import {imagen} from './DetalleProducto';


function ItemDetalle(producto) {

  
  console.log(producto)





  
  return <div>




        <div  
    className='col-md-4' key={producto.id} >  
    
                      
    <div className="card w-100 mt-5" >
        <div className="card-header" >
         {`${producto.name} - ${producto.categoria}`}
        </div>
        <div className="card-body">

        {<img src={imagen(`${producto.foto}`)} alt='' className='w-50' /> } 
       
        </div>
        {`${producto.price}`}$ 
     
   
    </div>
   
</div>  

  </div>;

}

export default ItemDetalle;
