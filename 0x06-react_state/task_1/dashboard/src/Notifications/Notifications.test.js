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
  it('function markAsRead - correct log message', () => {
    const ns = [
      {id: 1, html: undefined, type: "default", value: "a"},
      {id: 2, html: undefined, type: "default", value: "b"}
    ];
    wrapper = shallow(<Notifications displayDrawer={ true } listNotifications={ ns }/>);
    
    const markAsReadSpy = jest.spyOn(wrapper.instance(), 'markAsRead');
    const consoleSpy = jest.spyOn(console, 'log');

    wrapper.instance().markAsRead(ns[0].id);

    expect(markAsReadSpy).toHaveBeenCalled();
    expect(markAsReadSpy).toHaveBeenCalledWith(ns[0].id);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    markAsReadSpy.mockRestore();
    consoleSpy.mockRestore();
  });
});

describe("Notifications.test.js - pure component", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('disallow render component', () => {
    const ns = [
      {id: 1, html: undefined, type: "default", value: "New course available"}
    ];

    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={ns} />);
    
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');

    wrapper.setProps({ listNotifications:ns });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(false);

    jest.restoreAllMocks();

  });

  it('allow render component', () => {
    const ns = [
      {id: 1, html: undefined, type: "default", value: "New course available"},
    ];
    const ns2 = [
      {id: 1, html: undefined, type: "default", value: "New course available"},
      {id: 2, html: undefined, type: "urgent", value: "New resume available"}
    ];

    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={ns} />);
    
    const shouldComponentUpdate = jest.spyOn(Notifications.prototype, 'shouldComponentUpdate');

    wrapper.setProps({ listNotifications:ns2 });
    expect(shouldComponentUpdate).toHaveBeenCalled();
    expect(shouldComponentUpdate).toHaveLastReturnedWith(true);

    jest.restoreAllMocks();
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
