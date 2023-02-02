import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import Register from '../../../assets/styles/imgs/Register.png';


function FormRegister() {
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
                nombre: newForm.get("nombre"),
                usuario: newForm.get("usuario"),
                correo: newForm.get("correo"),
                contrasenia: newForm.get("contraseña"),
                
            })
        };

        fetch("http://34.225.239.102/api/registrar/usuario", options)
            .then(response => response.json())
            .then(data => {
                alert(JSON.stringify(data));
            });
       
    };

 
   
    return ( 
        <form  ref={form}>
        <div className='Form'>
          <img src={Register} width="200" height="200"></img>
          <div className='Name'>
            <input type="text" name="nombre"placeholder='Nombre'></input>
          </div>
          <div className='E-mail'>
            <input type="email" name="correo" placeholder='E-mail'></input>
          </div>
          <div className='Usuario'>
          <input type="text" name="usuario"placeholder='Usuario'></input>
          </div>
          <div className='Password'>
          <input type="password"  name="contraseña"placeholder='Contraseña'></input>
          </div>
          <button className="Onclick" onClick={handlerClick}> Registrarme</button>
          <Link to="/autobus" className='Boton'>Autobus</Link>
          </div>  
         </form>
     );

    }
export default FormRegister;