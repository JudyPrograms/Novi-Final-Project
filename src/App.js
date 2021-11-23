import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Login from "./pages/Login/Login";
import Play from "./pages/Play/Play";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Header from "./components/Header/Header";
import Start from "./pages/Start/Start";


function App() {
  return (
    <div className="page-container">
        <Header/>
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/start">
                <Start/>
            </Route>
            <Route exact path="/play">
                <Play/>
            </Route>
            <Route exact path="/dashboard">
                <Dashboard/>
            </Route>
            <Route exact path="/settings">
                <Settings/>
            </Route>
            <Route exact path="/account">
                <Account/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
