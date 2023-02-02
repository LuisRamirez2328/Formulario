import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import Login from '../../../assets/styles/imgs/Login.png';
import '../../../assets/styles/css/FormLogin.css';
function FormLogin() {
  const navigate = useNavigate();

    const form = useRef();

    const handlerClick = (e) => {
        e.preventDefault();
        const newForm = new FormData(form.current);
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
               
                usuario: newForm.get("usuario"),
               
                contrasenia: newForm.get("contraseña"),
                
            })
        };

        fetch("http://34.225.239.102/api/iniciar", options)
            .then(response => response.json())
            .then(data => {
                alert(JSON.stringify(data));
            });
       
    };
    return (
      <div className='Form'>
     <form ref={form}>
   
      <img src={Login} ></img>
      <div className='Form2'>
      <input type="text" name="usuario"placeholder='Usuario'></input>
      
      
      <input type="password" name="contraseña"placeholder='Contraseña'></input>
      </div>
      <div>
      <button className="Onclick" onClick={handlerClick}> INICIA SESION</button>
      </div>
      <div className='Form3'>
        
      <Link to="/autobus" className='Boton'>Alta Autobus</Link>
      </div>
      <Link to="/register" className='Boton'>Crear cuenta</Link>
      
     </form>
     </div>
      );
}

export default FormLogin;