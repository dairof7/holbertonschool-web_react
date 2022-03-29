import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from '../CourseList/CourseList'
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import {StyleSheet, css} from 'aphrodite';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';
import { loginRequest, logout } from '../actions/uiActionCreators';


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

class App extends Component {

  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleLogout);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleLogout);
  }

  handleLogout(event) {
    if (event.ctrlKey && event.key === 'h') {
        event.preventDefault();
        alert("Logging you out");
        this.props.logout();
    }
  }

  render() {

    let mainArea = (
      <BodySectionWithMarginBottom title='Log in to continue'>
        <Login logIn={ this.props.login }/>
      </BodySectionWithMarginBottom>
    );
    if (this.props.isLoggedIn) {
      mainArea = (
        <BodySectionWithMarginBottom title='Course list' >
          <CourseList />
        </BodySectionWithMarginBottom>
       );
    }

    return (
      <>
        <Notifications
          displayDrawer={ this.props.displayDrawer }
          handleDisplayDrawer={ this.props.displayNotificationDrawer }
          handleHideDrawer={ this.props.hideNotificationDrawer }
        />
        <div className={css(styles.app)}>
          <div className={css(styles.header)}>
            <Header/>
          </div>
          <div className={css(styles.body)}>
            { mainArea }
            <BodySection title='News from the School'>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
              </p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer/>
          </div>
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#E0354B',
    borderBottom: '4px solid #E0354B'
  },
  body: {
    padding: '50px 50px 115px 50px'
  },
  footer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    padding: '20px',
    backgroundColor: 'white',
    borderTop: '4px solid #E0354B',
    textAlign: 'center',
  }
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
  logout: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
  logout: () => {},
};

export const mapStateToProps =  (state) => {
  return {
    isLoggedIn: state.ui.get('isUserLoggedIn'),
    displayDrawer: state.ui.get('isNotificationDrawerVisible'),
  }
}

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout
};

export { App };
export default connect(mapStateToProps , mapDispatchToProps)(App)
