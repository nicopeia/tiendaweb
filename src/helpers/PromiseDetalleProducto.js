import {productos} from '../helpers/Productos';






export const getFetch = new Promise( (res,rej)=> {

   
    //acciones
    let condition= true
    if (condition) {
       
            //Acciones que quiero que se resuelvan
            res(productos)        
     
    }else{
        rej('404 no encontrado')
    }
} )