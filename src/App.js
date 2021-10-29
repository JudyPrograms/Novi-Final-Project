import React from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Play from "./pages/Play";


function App() {
  return (
    <div>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}

        <Play/>

    </div>
  );
}

export default App;
