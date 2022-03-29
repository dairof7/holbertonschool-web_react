import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';


export default class Login extends Component {

  static propTypes = {
    logIn: PropTypes.func
  }

  static defaultProps  = {
    logIn: () => void(0)
  }

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    }
    this.handleLoginSubmit  = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  handleChangeEmail(e) {
    this.setState({
        email: e.target.value,
    });
    this.setState(state => ({
        enableSubmit: (state.email !== "" && state.password !== ""),
      })
    );
  }

  handleChangePassword(e) {
    this.setState({
        password: e.target.value,
    });
    this.setState(state => ({
        enableSubmit: (state.email !== "" && state.password !== "")
      })
    );
  }

  render() {
    return (
      <>
        <p>Login to access the full dashboard</p>
        <form
        className={ css(styles.loginForm, styles.only900) }
        onSubmit={ this.handleLoginSubmit } >
          <label htmlFor="email">Email: </label>
          <input
            id="email" type="email" value={ this.state.email } name="email"
            className={css(styles.inputForm) } onChange={ this.handleChangeEmail }/>
          <label htmlFor="password"> Password: </label>
          <input
            id="password" type="password" value={ this.state.password } name="password"
            className={css(styles.inputForm)} onChange={ this.handleChangePassword }/>
          <input
            id="btnForm" type="submit" name="btnForm"
            value="OK"className={css(styles.btnForm)}
            disabled={ !this.state.enableSubmit }/>
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
