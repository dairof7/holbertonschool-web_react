import React from 'react';
import { mount, shallow } from 'enzyme';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from "aphrodite";


describe("Notifications.test.js", () => {
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
    wrapper = shallow(<Notifications />);
  });
  it('correct number of items in the list', () => {
    const ns = [
      {id: 1, html: undefined, type: "default", value: "New course available"},
      {id: 2, html: undefined, type: "urgent", value: "New resume available"},
      {id: 3, html: { __html: '<strong>Urgent requirement</strong>'} , type: "urgent", value: undefined},
    ];
    wrapper = shallow(<Notifications displayDrawer={ true } listNotifications={ ns }/>);
    expect(wrapper.find('ul').children().length).toEqual(3);
  });
  it('correct list title', () => {
    const ns = [
      {id: 1, html: undefined, type: "default", value: "a"}
    ];
    wrapper = shallow(<Notifications displayDrawer={ true } listNotifications={ ns }/>);
    expect(
      wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
    ).toBeTruthy();
  });
  it('empty array', () => {
    const ns = [];
    wrapper = shallow(<Notifications displayDrawer={ true } listNotifications={ ns }/>);
    expect(
      wrapper.containsMatchingElement(<li>No new notification for now</li>)
    ).toBeTruthy();
  });
  it('listNotifications undefined', () => {
    wrapper = shallow(<Notifications displayDrawer={ true }/>);
    expect(
      wrapper.containsMatchingElement(<li>No new notification for now</li>)
    ).toBeTruthy();
  });
  it('correct number of items in the list', () => {
    const ns = [
      {id: 1, html: undefined, type: "default", value: "a"},
      {id: 2, html: undefined, type: "urgent", value: "b"},
    ];
    wrapper = shallow(<Notifications displayDrawer={ true } listNotifications={ ns }/>);
    expect(wrapper.find('ul').children().length).toEqual(2);
  });
  it('correct messages when there are no notifications', () => {
    wrapper = shallow(<Notifications displayDrawer={ true } />);
    expect(
      wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)
    ).toBeFalsy();
    expect(
      wrapper.containsMatchingElement(<li>No new notification for now</li>)
    ).toBeTruthy();
  });

});

describe("Notifications.test.js - handles", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('handleDisplayDrawer', () => {

    const fakeState = { displayDrawer: false }

    const handleDisplayDrawer = jest.fn( () => {
      fakeState.displayDrawer = true;
    });

    const wrapper = mount(
      <Notifications
        displayDrawer={ fakeState.displayDrawer }
        handleDisplayDrawer={ handleDisplayDrawer }
      />
    );

    wrapper.find(`[data-test-id="notificationBtn"]`).simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(fakeState.displayDrawer).toEqual(true)
    
    jest.restoreAllMocks();
  });

  it('handleHideDrawer', () => {

    const fakeState = { displayDrawer: true }

    const handleHideDrawer = jest.fn( () => {
      fakeState.displayDrawer = false;
    });

    const wrapper = mount(
      <Notifications
        displayDrawer={ fakeState.displayDrawer }
        handleHideDrawer={ handleHideDrawer }
      />
    );

    wrapper.find(`[data-test-id="closeNotificationBtn"]`).simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
    expect(fakeState.displayDrawer).toEqual(false)

    jest.restoreAllMocks();
  });
});
