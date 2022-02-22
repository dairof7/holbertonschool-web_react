import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from '../CourseList/CourseList'
import { getLatestNotification } from '../utils/utils';


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
    logOut: () => undefined
  }

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

  handleLogout (event) {
    if (event.ctrlKey && event.key === 'h') {
        event.preventDefault();
        alert("Logging you out");
        this.props.logOut();
    }
  }

  render() {
    let mainArea = <Login />;
    if (this.props.isLoggedIn) {
      mainArea = <CourseList listCourses={ listCourses } />;
    }

    return (
      <>
        <Notifications listNotifications={ listNotifications }/>
        <div className="App">
          <div className="App-header">
            <Header/>
          </div>
          <div className="App-body">
            { mainArea }
          </div>
          <div className="App-footer">
            <Footer/>
          </div>
        </div>
      </>
    );
  }
}

