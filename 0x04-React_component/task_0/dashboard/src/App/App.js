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
    isLoggedIn: PropTypes.bool
  }

  static defaultProps  = {
    isLoggedIn: false
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

