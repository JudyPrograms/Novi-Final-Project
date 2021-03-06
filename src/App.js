import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Challenge from "./pages/Challenge/Challenge";
import Account from "./pages/Account/Account";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/Settings/Settings";
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
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/start">
                <Start/>
            </Route>
            <Route exact path="/challenge">
                <Challenge/>
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
