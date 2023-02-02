import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function Transporte() {
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
                clave: newForm.get("id"),
                placa: newForm.get("placa"),
                numasientos: newForm.get("asientos"),
                fecha: newForm.get("fecha"),
                tipo: newForm.get("tipo"),
                nombre: newForm.get("nombre"),
                licencia: newForm.get("licencia")
            })
        };

        fetch("http://34.225.239.102/api/autobus/register", options)
            .then(response => response.json())
            .then(data => {
                alert(JSON.stringify(data));
            });
       
    };

    return (
        <form ref={form}>
            <div>
                <input type="text" name="id" placeholder="Clave Autobus"></input>
                <input type="text" name="placa" placeholder="Placa Autobus"></input>
            </div>
            <div>
                <input
                    type="text"
                    name="asientos"
                    placeholder="Numero de asientos"
                ></input>
                <input type="date" name="fecha" placeholder="Fecha de alta"></input>
            </div>
            <div>
                <select name="tipo" id="">
                    <option >Lujo</option>
                    <option >Turismo</option>
                </select>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre del Chofer"
                ></input>
                <input
                    type="text"
                    name="licencia"
                    placeholder="Numero de licencia"
                ></input>
            </div>
            <button onClick={handlerClick}> Alta de autobus</button>
        </form>
    );
}

export default Transporte;
