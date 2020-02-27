import React, {useState} from 'react';
import firebaseApp from "../firebase";

import $ from 'jquery';

function NewPassword({user}) {

    const [webseite, setWebsite] = useState("");
    const [password, setPassword] = useState("");
    const [note, setNote] = useState("");

    const Submit = (event) => {
        event.preventDefault();
        firebaseApp.firestore().collection(user.uid).add({
            website: webseite,
            password: password,
            note: note
        })
            .then(() => {
                $("#newPassword").modal('hide');
                window.location.reload();
            })
            .catch(error => console.log(error))
    };

    return (
        <div className="text-right">
            <button className="button-primary" data-toggle="modal" data-target="#newPassword">
                neues Password
            </button>

            <div className="modal fade" id="newPassword" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Neues Password</h5>
                            <a className="close" data-dismiss="modal" aria-label="Close">
                                X
                            </a>
                        </div>
                        <form onSubmit={Submit}>
                            <div className="modal-body text-center">
                                <input type="text" placeholder="Webseite" onChange={event => setWebsite(event.target.value)}/>
                                <input type="text" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                                <input type="text" placeholder="Notiz" onChange={event => setNote(event.target.value)}/>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="button-secondary">Erstellen</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPassword
