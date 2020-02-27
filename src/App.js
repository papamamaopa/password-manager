import React, {useEffect, useState, lazy, Suspense} from 'react';
import './App.scss';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import firebaseApp from "./firebase";
import Register from "./pages/Register";

const Home = lazy(() => import('./pages/Home.js'));

function App() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(user => {
            if(user) {
                setUser(user);
            }else {
                const pathName = window.location.pathname;
                if(pathName !== "/login") {
                    if(pathName !== "/register") {
                        window.location.href = "/login"
                    }
                }
            }
        });
    }, [firebaseApp]);

  return (
    <div className="App">
      <BrowserRouter>
          <Navbar user={user}/>
          <Switch>
              <Route exact path="/">
                  <Suspense fallback={null}>
                      <Home user={user}/>
                  </Suspense>
              </Route>
              <Route path="/login">
                  <Login/>
              </Route>
              <Route path="/register">
                  <Register/>
              </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
