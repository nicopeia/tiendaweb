import React from 'react';

import {imagenes} from './ItemListContainer'
import ItemCount from './ItemCount/ItemCount';


function ItemList(prod) {
    
    function onAdd(cant){
console.log(cant);
    }
 
  return <div>

<div  
    className='col-md-4'>  
    
                      
    <div className="card w-100 mt-5" >
        <div className="card-header" >
         {`${prod.name} - ${prod.categoria}`}
        </div>
        <div className="card-body">
            {<img src={imagenes(`${prod.foto}`)} alt='' className='w-50' /> } 
                                                                     
        </div>
        {`${prod.price}`}$ 
        <div className="card-footer w-100">
       
    
            <button className="btn btn-outline-primary btn-block">
                Ver producto 
            </button>      
                                                                
        </div>
        <br></br>
    <ItemCount initial={1} stock={15} onAdd={onAdd}/>   
    </div>
   
</div>  


  </div>;
}

export default ItemList;
