import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


const wrapper = shallow(<Notifications />);
describe("Notifications.test.js", () => {
  it('correct component rendering', () => {
    shallow(<Notifications />);
  });
  it('correct number of items in the list', () => {
    const ns = [
      {id: 1, html: undefined, type: "default", value: "New course available"},
      {id: 2, html: undefined, type: "urgent", value: "New resume available"},
      {id: 3, html: { __html: '<strong>Urgent requirement</strong>'} , type: "urgent", value: undefined},
    ];
    const wrapper = shallow(<Notifications displayDrawer={ true } listNotifications={ ns }/>);
    expect(wrapper.find('ul').children().length).toEqual(3);
  });
  it('correct list title', () => {
    const ns = [
      {id: 1, html: undefined, type: "default", value: "a"}
    ];
    const wrapper = shallow(<Notifications displayDrawer={ true } listNotifications={ ns }/>);
    expect(
      wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
    ).toBeTruthy();
  });
  it('empty array', () => {
    const ns = [];
    const wrapper = shallow(<Notifications displayDrawer={ true } listNotifications={ ns }/>);
    expect(
      wrapper.containsMatchingElement(<li>No new notification for now</li>)
    ).toBeTruthy();
  });
  it('listNotifications undefined', () => {
    const wrapper = shallow(<Notifications displayDrawer={ true }/>);
    expect(
      wrapper.containsMatchingElement(<li>No new notification for now</li>)
    ).toBeTruthy();
  });
  it('correct number of items in the list', () => {
    const ns = [
      {id: 1, html: undefined, type: "default", value: "a"},
      {id: 2, html: undefined, type: "urgent", value: "b"},
    ];
    const wrapper = shallow(<Notifications displayDrawer={ true } listNotifications={ ns }/>);
    expect(wrapper.find('ul').children().length).toEqual(2);
  });
  it('correct messages when there are no notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={ true } />);
    expect(
      wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
    ).toBeFalsy();
    expect(
      wrapper.containsMatchingElement(<li>No new notification for now</li>)
    ).toBeTruthy();
  });
});
