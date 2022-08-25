import React from "react";
import "./LoginSection.scss";

export default function LoginSection(){
    return (
            <form className="login-section">
                <div className="login-container">
                    <h1>Zaloguj się</h1>

                    <div className="login-box">
                        <label className="email">Wprowadź Email</label>
                        <input type="email"
                               value="abc@xyz.com"
                               className="input-email"
                        />
                        <label className="password">Wprowadź Hasło</label>
                        <input type="password"
                               value="password"
                               className="input-password"

                        />
                    </div>
                    <div className="buttons-login">
                        <div className="login-button">Zaloguj się</div>
                        <div className="lub">Jeśli nie <br/>posiadasz</div>
                        <div className="create-account-button">Załóż konto<br/></div>


                    </div>
                </div>
            </form>
    );
}