import {Link} from 'react-router-dom';

function FormRegister() {
    
 
   
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