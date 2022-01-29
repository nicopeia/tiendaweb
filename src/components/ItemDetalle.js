import React from 'react';


function ItemDetalle(producto) {
  return <div>


<div className="card-header" >
         {`${producto.name} - ${producto.categoria}`}
        </div>


  </div>;
}

export default ItemDetalle;
