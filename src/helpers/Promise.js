import {productos} from '../helpers/Productos';






export const getFetch = new Promise( (res,rej)=> {

   
    //acciones
    let condition= true
    if (condition) {
        setTimeout(()=>{
            //Acciones que quiero que se resuelvan
            res(productos)        
        }, 2000)
    }else{
        rej('404 no encontrado')
    }
} )