function FormLogin() {
    return ( 
        <form >
        <div>
        <label className="caption"htmlFor="name"> Nombre</label>
        <input  type="text"  id="name" name="name"></input>
        </div>
        <div>
        <label  className="caption"> Usuario
            <input  type="text" username="username"></input>
        </label>
        </div>
        <div>
        <label  className="caption"> Contraseña
            <input type="password" password="password"></input>
        </label>
        </div>
        <div>
 <button >Registro</button>
 </div>
    </form>
     );
}

export default FormLogin;