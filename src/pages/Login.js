import React, {useState} from 'react';

//OTHER

//STYLE
import './Login.scss'

//IMAGES
import LOGIN from '../assets/login-flow.svg'
import firebaseApp from "../firebase";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Submit = (event) => {
        event.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                window.location.href = "/";
            })
            .catch(error => {
                document.getElementById("error").innerHTML = error.message
            })
    };

    return (
        <div className="Login">
            <div className="container">
                <div className="content">
                    <div className="pb-5 text-center">
                        <img height="100px" src={LOGIN} alt=""/>
                        <span className="title">
                            Login
                        </span>
                    </div>
                    <form onSubmit={Submit}>
                        <div className="pb-4">
                            <input type="email" placeholder="E-Mail" onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                        <div className="pb-5">
                            <input type="password" placeholder="Password" onChange={(event => setPassword(event.target.value))}/>
                        </div>
                        <div className="text-right">
                            <button className="button-primary">
                                login
                            </button>
                        </div>
                    </form>
                </div>
                <div className="content-footer">
                    <p id="error"/>
                    <span>
                        Noch keinen <a href="/register">Account</a> ?
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Login;
