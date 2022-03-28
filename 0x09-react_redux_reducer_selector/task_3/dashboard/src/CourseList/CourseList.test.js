import React from 'react';
import { shallow } from 'enzyme';
import CourseList from '../CourseList/CourseList';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from "aphrodite";


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

describe("CourseList.test.js", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Correct component rendering', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });
  it('Correct rows', () => {
    const wrapper = shallow(<CourseList listCourses={ listCourses }/>);
    expect(wrapper.find(CourseListRow).length).toEqual(5);

    expect(wrapper.find(CourseListRow).at(0).html()).toContain('Available courses');

    expect(wrapper.find(CourseListRow).at(1).html()).toContain('Course name');
    expect(wrapper.find(CourseListRow).at(1).html()).toContain('Credit');

    expect(wrapper.find(CourseListRow).at(2).html()).toContain('ES6');
    expect(wrapper.find(CourseListRow).at(2).html()).toContain('60');

    expect(wrapper.find(CourseListRow).at(3).html()).toContain('Webpack');
    expect(wrapper.find(CourseListRow).at(3).html()).toContain('20');

    expect(wrapper.find(CourseListRow).at(4).html()).toContain('React');
    expect(wrapper.find(CourseListRow).at(4).html()).toContain('40');
  });
  it('empty list', () => {
    const wrapper = shallow(<CourseList listCourses={ [] }/>);
    expect(
      wrapper.containsMatchingElement(<tr><td>No course available yet</td></tr>)
    ).toBeTruthy();
    expect(wrapper.find(CourseListRow).length).toEqual(2);
  });
  it('fill list', () => {
    const wrapper = shallow(<CourseList listCourses={ listCourses }/>);
    expect(wrapper.find(CourseListRow).length).toEqual(5);
  });
});
