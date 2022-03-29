import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";
import { getLatestNotification } from '../utils/utils';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Map, fromJS } from "immutable";
import { mapStateToProps } from './App';
import {initialState as uiInitialState } from '../reducers/uiReducer'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


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
    const state = Map(uiInitialState);
    const store = mockStore(state);
    wrapper = shallow(<App store={store}/>);
  });

  it('renders Header', () => {
    const state = Map(uiInitialState);
    const store = mockStore(state);
    wrapper = mount(<App store={store}/>);
    expect(wrapper.find('Header').exists()).toEqual(true);
  });
  it('renders Login', () => {
    const state = Map(uiInitialState);
    const store = mockStore(state);
    wrapper = mount(<App store={store}/>);
    expect(wrapper.find('Login').exists()).toEqual(true);
  });
  it('renders Footer', () => {
    const state = Map(uiInitialState);
    const store = mockStore(state);
    wrapper = mount(<App store={store}/>);
    expect(wrapper.find('Footer').exists()).toEqual(true);
  });
  it('not renders CourseList by default', () => {
    const state = Map(uiInitialState);
    const store = mockStore(state);
    wrapper = mount(<App store={store}/>);
    expect(wrapper.find(CourseList).exists()).toEqual(false);
  });
  it('CourseList exist when isLoggedIn == true', () => {
    let state = Map(uiInitialState);
    let store = mockStore( () => state);
    const newUiInitialState = { ...uiInitialState, isUserLoggedIn: true }
    state = Map(newUiInitialState);
    store.dispatch({ type: 'LOGIN_SUCCESS' });
    wrapper = shallow(<App store={store}/>).dive().dive();
    wrapper.setState({
      user: {
        email: "",
        password: "",
      },
    });
    expect(wrapper.find(CourseList).exists()).toEqual(true);
  });
  it('CourseList no exist when isLoggedIn == false', () => {
    const state = Map(uiInitialState);
    const store = mockStore(state);
    wrapper = mount(<App store={store}/>);
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
    const state = Map(uiInitialState);
    const store = mockStore(state);
    wrapper = mount(<App store={store}/>);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const event = new KeyboardEvent('keydown', {ctrlKey:true, key:'h'});
    window.dispatchEvent(event);
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });

  it('handleDisplayDrawer', () => {
    const state = Map(uiInitialState);
    const store = mockStore(state);
    wrapper = shallow(<App store={store}/>).dive().dive();
    const handleDisplayDrawer = jest.spyOn(wrapper.instance(), 'handleDisplayDrawer');
    expect(wrapper.state().displayDrawer).toEqual(false);
    wrapper.instance().handleDisplayDrawer();
    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it('handleHideDrawer', () => {
    const state = Map(uiInitialState);
    const store = mockStore(state);
    wrapper = shallow(<App store={store}/>).dive().dive();
    wrapper.setState({
      displayDrawer: true
    });
    expect(wrapper.state().displayDrawer).toEqual(true);
    const handleHideDrawer = jest.spyOn(wrapper.instance(), 'handleHideDrawer');
    wrapper.instance().handleHideDrawer();
   expect(handleHideDrawer).toHaveBeenCalled();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("logIn function updates the state correctly", () => {
    const state = Map(uiInitialState);
    const store = mockStore(state);
    wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <App store={store}/>
      </AppContext.Provider>
    ).dive().dive().dive();
    const user1 = {
      email: "123@hotmail.com",
      password: "123",
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    wrapper.instance().logIn(user1.email, user1.password);
    expect(wrapper.state().user).toEqual(user1);
  });

  it("logOut function updates the state correctly", () => {
    const state = Map(uiInitialState);
    const store = mockStore(state);
    wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <App store={store}/>
      </AppContext.Provider>
    ).dive().dive().dive();

    const user1 = {
      email: "123@hotmail.com",
      password: "123",
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    wrapper.instance().logIn(user1.email, user1.password);
    expect(wrapper.state().user).toEqual(user1);
    wrapper.instance().logOut();
    expect(wrapper.state().user).toEqual(user);
  });

  it('verify that markNotificationAsRead works as intended.', (done) => {
    const appContextValues = { user: user, logOut: logOut};
    const listNotifications = [
      {id: 1, html: undefined, type: "default", value: "New course available"},
      {id: 2, html: undefined, type: "urgent", value: "New resume available"},
      {id: 3, html: { __html: getLatestNotification()} , type: "urgent", value: undefined},
    ];
    const state = Map(uiInitialState);
    const store = mockStore(state);
    wrapper = shallow(
      <AppContext.Provider value={appContextValues}>
        <App store={store}/>
      </AppContext.Provider>
    ).dive().dive().dive();
    wrapper.setState({ listNotifications: listNotifications });
    expect(wrapper.state().listNotifications.length).toEqual(3);
    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state().listNotifications.length).toEqual(2);
    done();
  });

});

describe("App.test.js - Redux Store", () => {
  it('function mapStateToProps returns the right object', (done) => {
    let state = fromJS({ isUserLoggedIn: true });
    const r = mapStateToProps(state);
    expect(r).toEqual({ isLoggedIn: true });
    done();
  });
});

