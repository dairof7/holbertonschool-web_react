import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from "aphrodite";


const wrapper = shallow(<Header/>);

describe("Header.test.js", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('correct component rendering', () => {
    shallow(<Header />);
  });
  it('img exist', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });
  it('h1 exist', () => {
    expect(
      wrapper.containsMatchingElement(<h1>School dashboard</h1>)
    ).toBeTruthy();
  });
});
