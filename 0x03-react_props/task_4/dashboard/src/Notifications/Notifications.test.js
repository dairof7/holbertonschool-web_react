import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);
describe("Notifications.test.js", () => {
  it('correct component rendering', () => {
    shallow(<Notifications />);
  });
  it('correct number of items in the list', () => {
    const wrapper = shallow(<Notifications displayDrawer={ true }/>);
    expect(wrapper.find('ul').children().length).toEqual(3);
  });
  it('correct list title', () => {
    const wrapper = shallow(<Notifications displayDrawer={ true }/>);
    expect(
      wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
    ).toBeTruthy();
  });
});
