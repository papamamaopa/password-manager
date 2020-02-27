import React, {useEffect, useState} from 'react';
import firebaseApp from "../firebase";

//OTHER

//STYLE
import './Home.scss'

//IMAGES
import Password from "../components/Password";
import NewPassword from "../components/NewPassword";

function Home({user}) {

    const [passwords, setPasswords] = useState([]);

    useEffect(() => {
        if(user.uid) {
            firebaseApp.firestore().collection(user.uid).get()
                .then(results => results.docs.map(pws => pws))
                .then(setPasswords)
                .catch(console.error)
        }
    }, [user]);

    return (
        <div className="Home">
            <div className="pt-5">
                <div className="container pt-5">
                    <div className="box">
                        <NewPassword user={user}/>
                        <div className="password pt-3">
                            <div className="container-fluid">
                                <div className="row d-flex align-items-center">
                                    <div className="col">
                                        Webseite
                                    </div>
                                    <div className="col">
                                        Password
                                    </div>
                                    <div className="col">
                                        Notiz
                                    </div>
                                    <div className="col">
                                        Aktionen
                                    </div>
                                </div>
                            </div>
                            {
                                passwords.map((password, idx) => {
                                    return (
                                        <Password key={idx} userId={user.uid} id={password.id} website={password.data().website} password={password.data().password} note={password.data().note} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;
