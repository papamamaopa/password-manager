import React, {useState} from 'react';

//OTHER

//STYLE
import './Register.scss'

//IMAGES
import LOGIN from '../assets/login-flow.svg'
import firebaseApp from "../firebase";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Submit = (event) => {
        event.preventDefault();
        if(email && password) {
            firebaseApp.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    window.location.href = "/"
                })
                .catch(error => {
                    document.getElementById("error").innerHTML = error.message
                })
        }
    };

    return (
        <div className="Register">
            <div className="container">
                <div className="content">
                    <div className="pb-5 text-center">
                        <img height="100px" src={LOGIN} alt=""/>
                        <span className="title">
                            Register
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
                            <button className="button-primary" onClick={Submit}>
                                login
                            </button>
                        </div>
                    </form>
                </div>
                <div className="content-footer text-center">
                    <p id="error"/>
                    <span>
                        Schon einen <a href="/login">Account</a> ?
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Register;
