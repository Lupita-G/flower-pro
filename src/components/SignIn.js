import React, { useState } from "react";

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
        <form className="tarjeta">
            <div className="mb-3">
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    onChange={onChangeUserEmail}
                />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Contraseña"
                    onChange={onChangePassword}
                />
            </div>
            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    );

}

export default SignIn;
