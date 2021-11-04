import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Play from "./pages/Play";
import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
    <div className="page-container">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <Header/>
        <Navbar/>
        <Switch>
            <Route exact path="/">
                <Play/>
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
