import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import {StyleSheet, css} from 'aphrodite';


export default class Header extends Component {
  render() {
    return (
      <header className={css(styles.header)}>
        <img src={ logo } className={css(styles.img)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
      </header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    '@media only screen and (max-width: 400px)': {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto'
    }
  },
  img: {
    width: '14rem'
  },
  h1: {
    fontWeight: 'bold'
  },
});
