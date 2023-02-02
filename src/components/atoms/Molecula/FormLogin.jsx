import {Link} from 'react-router-dom';
import Login from '../../../assets/styles/imgs/Login.png';

function FormLogin() {
    return (
        <div className='Login'>
            <img src={Login} alt="Logo" width="100" height="100"/>
         <form action="">
          <input type="text" placeholder="Nombre del usuario"></input>
          <input type="text" placeholder="Contraseña"></input>
          <div>
          <Link to="/autobus">Inicia sesion</Link>
          </div>
          <div>
          <Link to="/register">Crear usuario</Link>
          </div>
          </form>
         

        </div>
      );
}

export default FormLogin;