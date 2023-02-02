import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function FormRegister() {
    const navigate =useNavigate()
      
    const form = useRef();

  const handlerClick = (e)=>{
  e.preventDefault();
  
 const newForm =new FormData(form.current)
 
}
   
    return ( 
        <form >
            <input type="text" placeholder="Nombre"></input>
            <input type="text" placeholder="E-mail"></input>
            <input type="text" placeholder="Username"></input>
            <input type="text" placeholder="Password"></input>
            <Link to="/autobus">Crear cuenta</Link>
        </form>
     );

    }
export default FormRegister;