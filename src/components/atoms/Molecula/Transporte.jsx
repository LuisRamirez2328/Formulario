import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function Transporte() {
    const navigate =useNavigate()
      
          const form = useRef();
   
        const handlerClick = (e)=>{
        e.preventDefault();
        
       const newForm =new FormData(form.current)
    }
    
    return ( 
        <form>
            <div class="Principal">
                <input type="text" name="id"placeholder="Clave Autobus"></input>
                <input type="text" name="placa"placeholder="Placa Autobus"></input>
            </div>
            <div class="Principal2">
                <input type="text" name="asientos"placeholder="Numero de asientos"></input>
                <input type="date" name="fecha"placeholder="Fecha de alta"></input>
            </div>
            <div class="Principal3">
                <input type="checkbox" name="tipo"placeholder="Tipo"></input>
                <input type="text" name="nombre"placeholder="Nombre del Chofer"></input>
                <input type="text" name="licencia"placeholder="Numero de licencia"></input>
            </div>
            <button> Alta de autobus</button>
        </form>
       
     );
}

export default Transporte;