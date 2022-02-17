import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);
describe("App.test.js", () => {
  it('Correct component rendering', () => {
    shallow(<App />);
  });

  it('renders App-header', () => {
    expect(wrapper.find('div.App-header').exists()).toEqual(true);
  });
  it('renders App-body', () => {
    expect(wrapper.find('div.App-body').exists()).toEqual(true);
  });
  it('renders App-footer', () => {
    expect(wrapper.find('div.App-footer').exists()).toEqual(true);
  });
  it('renders Header', () => {
    expect(wrapper.find('Header').exists()).toEqual(true);
  });
  it('renders Login', () => {
    expect(wrapper.find('Login').exists()).toEqual(true);
  });
  it('renders Footer', () => {
    expect(wrapper.find('Footer').exists()).toEqual(true);
  });
});
