import React, { useState } from "react";
import '../styles/SignUp.css';

function SignUp() {
    
    /*const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    function onChangeUserEmail(event) {
        setUserEmail(event.target.value);    
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
    }
    
    function onSubmitForm(event) {
        event.preventDefault();

    }*/

    return (
        <form className="container-one">
        <h3>Bienvenido</h3>
        <p>Ingresa tus datos para crear una cuenta</p>
        <div className="container-two">
            <div className= "mb-3">
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputNombre1"
                    placeholder="Nombre"
                    
                />         
            </div>
            <div className= "mb-3">
                <input
                    type="text"
                    class="form-control"
                    id="exampleInputApellido1"
                    placeholder="Apellido"
                    
                />         
            </div>
            <div className= "mb-3">
                <input
                    type="Email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email"
                    
                />         
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Contraseña"
                    
                />
            </div>
          <button type="submit" class="btn ">Crear Cuenta</button>
        </div>
    </form>
    );

}

export default SignUp;

