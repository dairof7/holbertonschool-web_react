import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form className="loginForm">
          <label htmlFor="email">Email: </label>
          <input id="email" type="text"/>
          <label htmlFor="password"> Password: </label>
          <input id="password" type="text"/>
          <button id="btnForm">OK</button>
        </form>
      </div>
      <div className="App-footer">
       <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
