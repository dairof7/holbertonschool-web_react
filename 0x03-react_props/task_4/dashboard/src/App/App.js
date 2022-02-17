import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from '../CourseList/CourseList'


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
      mainArea = <CourseList />;
    }

    return (
      <>
        <Notifications />
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

