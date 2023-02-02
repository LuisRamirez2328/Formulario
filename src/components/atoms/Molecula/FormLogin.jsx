import {Link} from 'react-router-dom';
import Login from '../../../assets/styles/imgs/Login.png';
import '../../../assets/styles/css/FormLogin.css';
function FormLogin() {
    return (
      <div className='Form'>
     <form>
   
      <img src={Login} ></img>
      <div className='Form2'>
      <input type="text" placeholder='Usuario'></input>
      
      
      <input type="password" placeholder='Contraseña'></input>
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