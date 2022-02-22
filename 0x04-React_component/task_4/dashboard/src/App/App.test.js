import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';

describe("App.test.js", () => {
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  it('Correct component rendering', () => {
    wrapper = shallow(<App />);
  });

  it('renders App-header', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('div.App-header').exists()).toEqual(true);
  });
  it('renders App-body', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('div.App-body').exists()).toEqual(true);
  });
  it('renders App-footer', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('div.App-footer').exists()).toEqual(true);
  });
  it('renders Header', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('Header').exists()).toEqual(true);
  });
  it('renders Login', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('Login').exists()).toEqual(true);
  });
  it('renders Footer', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('Footer').exists()).toEqual(true);
  });
  it('not renders CourseList by default', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).exists()).toEqual(false);
  });
  it('CourseList exist when isLoggedIn = true', () => {
    wrapper = shallow(<App isLoggedIn={ true } />);
    expect(wrapper.find(CourseList).exists()).toEqual(true);
  });
  it('CourseList exist when isLoggedIn = false', () => {
    wrapper = shallow(<App isLoggedIn={ false } />);
    expect(wrapper.find(Login).exists()).toEqual(true);
  });
});

describe("App.test.js - events", () => {
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  it('Alert when user keydown ctrl+h', () => {
    wrapper = shallow(<App />);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const event = new KeyboardEvent('keydown', {ctrlKey:true, key:'h'});
    window.dispatchEvent(event);
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });
});
