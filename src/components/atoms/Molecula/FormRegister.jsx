import {Link} from 'react-router-dom';
import Register from '../../../assets/styles/imgs/Register.png';


function FormRegister() {
    
 
   
    return ( 
        <form>
        <div className='Form'>
          <img src={Register} width="200" height="200"></img>
          <div className='Name'>
            <input type="text" placeholder='Nombre'></input>
          </div>
          <div className='E-mail'>
            <input type="text" placeholder='E-mail'></input>
          </div>
          <div className='Usuario'>
          <input type="text" placeholder='Usuario'></input>
          </div>
          <div className='Password'>
          <input type="password" placeholder='Contraseña'></input>
          </div>
          <Link to="/autobus" className='Boton'>Alta Autobus</Link>
          
          </div>  
         </form>
     );

    }
export default FormRegister;