import React from 'react';
import { mount, shallow } from 'enzyme';
import { App } from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from "aphrodite";
import { Map, fromJS } from "immutable";
import { mapStateToProps } from './App';

import {initialState as uiInitialState } from '../reducers/uiReducer';

 import Header from '../Header/Header';
 import Footer from '../Footer/Footer';

describe("App.test.js", () => {
  let wrapper;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Correct component rendering', () => {
    wrapper = shallow( <App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders Header', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).toEqual(true);
  });
  it('renders Login', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find(Login).exists()).toEqual(true);
  });
  it('renders Footer', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find(Footer).exists()).toEqual(true);
  });
  it('not renders CourseList by default', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).exists()).toEqual(false);
  });
  it('CourseList exist when isLoggedIn == true', () => {
    wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find(CourseList).exists()).toEqual(true);
  });
  it('CourseList no exist when isLoggedIn == false', () => {
    wrapper = shallow(<App isLoggedIn={false}/>);
    expect(wrapper.find(CourseList).exists()).toEqual(false);
    expect(wrapper.find(Login).exists()).toEqual(true);
  });
});

describe("App.test.js - events", () => {
  let wrapper;

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });


  it('Alert when user keydown ctrl+h', () => {
    wrapper = shallow(<App isLoggedIn={true}/>);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const event = new KeyboardEvent('keydown', {ctrlKey:true, key:'h'});
    window.dispatchEvent(event);
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });

  /*
  it('handleDisplayDrawer', () => {
  });

  it('handleHideDrawer', () => {
  });
  
  it("logIn function updates the state correctly", () => {
  });

  it("logOut function updates the state correctly", () => {
  });

  it('verify that markNotificationAsRead works as intended.', (done) => {
    const listNotifications = [
      {id: 1, html: undefined, type: "default", value: "New course available"},
      {id: 2, html: undefined, type: "urgent", value: "New resume available"},
      {id: 3, html: { __html: getLatestNotification()} , type: "urgent", value: undefined},
    ];
  });*/

});

describe("App.test.js - Redux Store", () => {
  it('function mapStateToProps returns the right object - isUserLoggedIn', (done) => {
    let state = fromJS(uiInitialState);
    let r = mapStateToProps(state);
    expect(r).toEqual({ isLoggedIn: false, displayDrawer: false });
    state = fromJS({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: null
    });
    r = mapStateToProps(state);
    expect(r).toEqual({ isLoggedIn: false, displayDrawer: true });
    done();
  });

  it('function mapStateToProps returns the right object - displayDrawer', (done) => {

    let state = fromJS(uiInitialState);
    let r = mapStateToProps(state);
    expect(r).toEqual({ isLoggedIn: false, displayDrawer: false });
    state = fromJS({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: null
    });
    r = mapStateToProps(state);
    expect(r).toEqual({ isLoggedIn: false, displayDrawer: true });
    done();
  });
});

