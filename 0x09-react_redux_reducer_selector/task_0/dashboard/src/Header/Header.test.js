import React from 'react';
import Header from './Header';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "../App/AppContext";


describe("Header.test.js", () => {
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
    wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toEqual(true);
  });
  it('img exist', () => {
    wrapper = mount(
    <AppContext.Provider value={{ user, logOut }}>
      <Header />
    </AppContext.Provider>
    );
    expect(wrapper.find('img').length).toEqual(1);
  });
  it('h1 exist', () => {
    wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(
      wrapper.containsMatchingElement(<h1>School dashboard</h1>)
    ).toBeTruthy();
  });
  it("The logoutSection is created", () => {
    wrapper = mount(
      <AppContext.Provider
        value={{ user: { ...user, isLoggedIn: true }, logOut }}
      >
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection")).toHaveLength(1);
  });

  it("The logoutSection disappears when the logout function is called", () => {
    let logOutSpy = jest.fn();

    wrapper = mount(
      <AppContext.Provider
        value={{
          user: {
            email: "123@hotmail.com",
            password: "123",
            isLoggedIn: true,
          },
          logOut: logOutSpy,
        }}
      >
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.find("#logoutSection")).toHaveLength(1);
    wrapper.find("#logoutSection span").simulate("click");

    expect(logOutSpy).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});
