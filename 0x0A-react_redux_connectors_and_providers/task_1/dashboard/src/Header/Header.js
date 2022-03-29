import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import {StyleSheet, css} from 'aphrodite';
import AppContext from "../App/AppContext";


export default class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;
    return (
      <header className={css(styles.header)}>
        <img src={ logo } className={css(styles.img)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
        { user.isLoggedIn && (
          <p id="logoutSection" className={ css(styles.logoutSection) }>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={ logOut } className={ css(styles.logoutSectionSpan) }>
              (logout)
            </span>
          </p>
        )}
      </header>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    '@media only screen and (max-width: 480px)': {
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
  logoutSection: {
    color: "black",
    position: "absolute",
    right: 0,
    paddingRight: "20px",
    alignSelf: "flex-end",
    marginBottom: "10px",
    '@media only screen and (max-width: 480px)': {
      marginTop: '10px',
      marginBottom: '10px',
      position: "relative",
      right: "none",
      paddingRight: "0px"
    }
  },
  logoutSectionSpan: {
    fontStyle: "italic",
    cursor: "pointer",
    color: "white",
    backgroundColor: "rgb(224, 53, 75)",
    borderRadius: "20px",
    padding: "5px 10px"
  },
});
