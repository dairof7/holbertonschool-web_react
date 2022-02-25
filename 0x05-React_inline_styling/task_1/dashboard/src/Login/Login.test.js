import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from "aphrodite";


describe("Login.test.js", () => {
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

  it('correct component rendering', () => {
    wrapper = shallow(<Login/>);
    expect(wrapper.exists()).toEqual(true);
  });
  it('inputs exist', () => {
    wrapper = shallow(<Login/>);
    expect(wrapper.find('input').length).toEqual(2);
  });
  it('labels exist', () => {
    wrapper = shallow(<Login/>);
    expect(wrapper.find('label').length).toEqual(2);
  });
});
