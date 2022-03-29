import React from 'react';
import Footer from './Footer';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from "aphrodite";
import { user, logOut } from "../App/AppContext";
import AppContext from "../App/AppContext";


describe("Footer.test.js", () => {
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
    wrapper = mount(<Footer/>);
    expect(wrapper.exists()).toEqual(true);
  });
  it('correct text - Copyright', () => {
    wrapper = mount(<Footer/>);
    let tmp  = (wrapper.find('p').at(0)
    .text().indexOf('Copyright') !== -1) ? true : false;
    expect(tmp).toEqual(true);
  });
  it("Hide links when not having session", () => {
    wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("p a")).toHaveLength(0);
  });

  it("show links when having session", () => {
    wrapper = mount(
      <AppContext.Provider
        value={
          { user: {
             ...user,
             isLoggedIn: true
            }, logOut
          }
        }
      >
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("p a")).toHaveLength(1);
    expect(wrapper.find("p a").text()).toEqual("Contact us");
  });
});