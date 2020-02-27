import React from 'react';

//OTHER

//STYLE
import './Navbar.scss'

//IMAGES
import LOGIN from '../assets/login-flow.svg'
import LOGOUT from '../assets/logout-flow.svg'
import firebaseApp from "../firebase";

function Navbar( user ) {

    const SignOut = () => {
        firebaseApp.auth().signOut()
            .then(() => {
                window.location.href = "/login"
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        Password Manager
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            {
                                user.length !== 0 ?
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#" onClick={SignOut}>
                                            <img src={LOGOUT} alt=""/>
                                        </a>
                                    </li>
                                    :
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">
                                            <img src={LOGIN} alt=""/>
                                        </a>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;
