import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import {StyleSheet, css} from 'aphrodite';

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

const listNotifications = [
  {id: 1, html: undefined, type: "default", value: "New course available"},
  {id: 2, html: undefined, type: "urgent", value: "New resume available"},
  {id: 3, html: { __html: getLatestNotification()} , type: "urgent", value: undefined},
];

export default class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
  }

  static defaultProps  = {
    isLoggedIn: false,
    logOut: () => void(0)
  }

  constructor(props) {
    super(props)
    this.state = {
      displayDrawer: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
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
        this.props.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { displayDrawer } = this.state;
    let mainArea = (
      <BodySectionWithMarginBottom title='Log in to continue'>
      <Login />
      </BodySectionWithMarginBottom>
    );
    if (this.props.isLoggedIn) {
      mainArea = (
        <BodySectionWithMarginBottom title='Course list' >
          <CourseList listCourses={listCourses} />
        </BodySectionWithMarginBottom>
       );
    }

    return (
      <>
        <Notifications
          listNotifications={ listNotifications }
          displayDrawer={ displayDrawer }
          handleDisplayDrawer={ this.handleDisplayDrawer }
          handleHideDrawer={ this.handleHideDrawer }
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
    borderTop: '4px solid #E0354B'
  }
});
