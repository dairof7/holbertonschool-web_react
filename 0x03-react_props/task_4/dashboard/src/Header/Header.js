import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';


export default class Header extends Component {
  render() {
    return (
      <>
        <img src={ logo } className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </>
    )
  }
}
