import React from 'react';
import { mount } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from "aphrodite";


describe("BodySectionWithMarginBottom.test.js", () => {
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
    wrapper = mount(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.find(BodySection).exists()).toEqual(true);
    expect(wrapper.find(BodySection).prop('title')).toEqual('test title');
    expect(wrapper.find(BodySection).prop('children').type).toEqual('p');
    expect(wrapper.find(BodySection).find('p').at(0).text()).toEqual('test children node');
  });

  it('renders title', () => {
    wrapper = mount(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find('h2').exists()).toEqual(true);
    expect(wrapper.find('h2').text()).toContain('test title');
  });

  it('renders childs', () => {
    wrapper = mount(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find('p').exists()).toEqual(true);
    expect(wrapper.find('p').text()).toContain('test children node');
  });
  
});