import { useState } from "react";
import Card from "./Card"

function Formulario() {

    const [datos, setDatos] = useState({
        nombre: "",
        apellido:"",
    })



 

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(datos.nombre.trim().length >= 3 && datos.apellido.trim().length >= 6){
            return <Card dato={datos}/>
        }else{
            alert("Por favor chequea que la información sea correcta")
        }
    } 

  return (
    <div> 
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" onChange={(e) => setDatos({...datos, nombre: e.target.value})}></input>
        <label>Apellido</label>
        <input type="text" onChange={(e) => setDatos({...datos, apellido: e.target.value})}></input>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;