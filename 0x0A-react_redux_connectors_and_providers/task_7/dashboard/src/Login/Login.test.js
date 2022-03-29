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
    expect(wrapper.find('input').length).toEqual(3);
  });
  it('labels exist', () => {
    wrapper = shallow(<Login/>);
    expect(wrapper.find('label').length).toEqual(2);
  });
  it("the submit button is disabled by default", () => {
    const wrapper = shallow(<Login />);
    const submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput).toHaveLength(1);
    expect(submitInput.prop("disabled")).toEqual(true);
  });

  it("after changing the value of the two inputs, the button is enabled", () => {
    const wrapper = shallow(<Login />);
    const emailInput = wrapper.find("#email");
    const passwordInput = wrapper.find("#password");

    emailInput.simulate("change", {
      target: { name: "email", value: "123@hotmail.com" },
    });

    let submitInput = wrapper.find("form input[type='submit']");

    expect(submitInput.prop("disabled")).toEqual(true);

    passwordInput.simulate("change", {
      target: { name: "password", value: "123" },
    });

    submitInput = wrapper.find("form input[type='submit']");
    expect(submitInput.prop("disabled")).toEqual(false);
  });
});
