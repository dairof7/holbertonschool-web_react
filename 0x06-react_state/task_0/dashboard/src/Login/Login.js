import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';

export default class Login extends Component {

  render() {
    return (
      <>
        <p>Login to access the full dashboard</p>
        <form className={ css(styles.loginForm, styles.only900) }>
          <label htmlFor="email">Email: </label>
          <input id="email" type="text" className={css(styles.inputForm)} />
          <label htmlFor="password"> Password: </label>
          <input id="password" type="text" className={css(styles.inputForm)} />
          <button id="btnForm" className={css(styles.btnForm)}>OK</button>
        </form>
      </>
    )
  }
}

const styles = StyleSheet.create({
  only900: {
    '@media only screen and (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column',
    }
  },
  loginForm: {
    padding: '20px 0px',
  },
  inputForm: {
    border: '1px solid #dfdfdf',
    borderRadius: '10px',
    marginRight: '10px',
    maxWidth: '200px'
  },
  btnForm: {
    padding: '3px 6px',
    background: 'white',
    border: '1px solid #dfdfdf',
    borderRadius: '3px',
    cursor: 'pointer',
    maxWidth: '40px'
  }
});
