import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from '../CourseList/CourseListRow';
import { StyleSheetTestUtils } from "aphrodite";


describe("CourseListRow.test.js", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Correct component rendering', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test0" />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('renders with 1 th', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test1"/>);
    const th = wrapper.find('th');
    expect(th.prop('colSpan')).toEqual("2");
    expect(th.text()).toEqual('test1');
  });
  it('renders with 2 th', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={ true }
        textFirstCell="test1"
        textSecondCell="test2"
      />);
    expect(wrapper.find('th').length).toEqual(2);
    expect(wrapper.find('th').first().text()).toEqual('test1');
    expect(wrapper.find('th').last().text()).toEqual('test2');
  });
  it('renders with 2 td', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={ false }
        textFirstCell="test1"
        textSecondCell="test2"
      />);
    expect(wrapper.find('td').length).toEqual(2);
    expect(wrapper.find('td').first().text()).toEqual('test1');
    expect(wrapper.find('td').last().text()).toEqual('test2');
  });
});