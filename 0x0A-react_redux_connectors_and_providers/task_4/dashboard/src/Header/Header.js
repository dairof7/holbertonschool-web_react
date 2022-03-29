import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import logo from '../assets/holberton-logo.jpg';
import {StyleSheet, css} from 'aphrodite';
import { logout } from '../actions/uiActionCreators';


class Header extends Component {

  render() {
    const { user, logout } = this.props;
    return (
      <header className={css(styles.header)}>
        <img src={ logo } className={css(styles.img)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
        { user && (
          <p id="logoutSection" className={ css(styles.logoutSection) }>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={ logout } className={ css(styles.logoutSectionSpan) }>
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

Header.defaultProps = {
  user: {},
  logout: () => {},
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

export const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  }
}

export const mapDispatchToProps = {
  logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
