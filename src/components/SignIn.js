import React, { useState } from "react";
import '../styles/SignIn.css';

function SignIn() {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    function onChangeUserEmail(event) {
        setUserEmail(event.target.value);    
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
    }
    
    function onSubmitForm(event) {
        event.preventDefault();

    }

    return (
        <form className="container-one">
        <h3>Bienvenido</h3>
        <p>Ingresa tu Email y Contraseña para iniciar</p>
        <div className="container-two">
            <div className= "mb-3">
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
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
                <a href="/">¿Olvidó su contraseña</a>
            </div>
          <button type="submit" class="btn ">Enviar</button>
        </div>
    </form>
    );

}

export default SignIn;
