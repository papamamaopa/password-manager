import React, {useEffect, useState} from 'react';
import firebaseApp from "../firebase";

//IMAGES
import VISIBLE from '../assets/visible-bold.svg'
import INVISIBLE from '../assets/invisible-bold.svg'

function Password({id, userId, website, password, note}) {

    const hiddenChar = "-";

    const [hiddenPasword, setHiddenPassword] = useState(hiddenChar.repeat(4));
    const [isHidden, setIsHidden] = useState(true);

    const [wb, setWb] = useState(website);
    const [pw, setPw] = useState(password);
    const [nt, setNt] = useState(note);

    const ShowPassword = () => {
        if(hiddenPasword !== password) {
            setHiddenPassword(password);
            setIsHidden(false)
        }else {
            setHiddenPassword(hiddenChar.repeat(4));
            setIsHidden(true)
        }
    };

    const DeletePassword = () => {
      firebaseApp.firestore().collection(userId).doc(id).delete()
          .then(() => window.location.reload())
          .catch(console.error)
    };

    const Submit = (event) => {
        event.preventDefault();
        firebaseApp.firestore().collection(userId).doc(id).update({
            website: wb,
            password: pw,
            note: nt
        })
            .then(() => window.location.reload())
    };

    return (
        <div className="container-fluid pt-4">
            <div className="row d-flex align-items-center">
                <div className="col">
                    <a href="">{website}</a>
                </div>
                <div className="col">
                    <a className="d-flex align-items-center" onClick={() => ShowPassword()}>
                        {hiddenPasword}
                        <span className="pl-3">
                            {
                                isHidden ?
                                    <img src={VISIBLE} alt=""/>
                                    :
                                    <img src={INVISIBLE} alt=""/>
                            }
                        </span>
                    </a>
                </div>
                <div className="col">
                    {note}
                </div>
                <div className="col">
                    <button className="button-primary" onClick={() => DeletePassword()}>
                        X
                    </button>
                    <button className="button-primary" data-toggle="modal" data-target="#editPw">
                        EDIT
                    </button>
                </div>
            </div>
            <div className="modal fade" id="editPw" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Password</h5>
                            <a className="close" data-dismiss="modal" aria-label="Close">
                                X
                            </a>
                        </div>
                        <form onSubmit={Submit}>
                            <div className="modal-body text-center">
                                <input type="text" placeholder="Webseite" onChange={event => setWb(event.target.value)} value={wb}/>
                                <input type="text" placeholder="Password" onChange={event => setPw(event.target.value)} value={pw}/>
                                <input type="text" placeholder="Notiz" onChange={event => setNt(event.target.value)} value={nt}/>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="button-secondary">Updaten</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password
