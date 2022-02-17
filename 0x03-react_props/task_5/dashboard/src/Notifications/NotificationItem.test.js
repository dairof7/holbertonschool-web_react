import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

// const wrapper = shallow(<NotificationItem/>);

describe("NotificationItem.test.js", () => {
  it('correct component rendering', () => {
    shallow(<NotificationItem />);
  });
  it('correct component rendering - case1 - value, type', () => {
    const type = "default";
    const value = "test";
    const html = undefined;
    const wrapper = shallow(<NotificationItem type={ type } value={ value }/>);
    const li = wrapper.find('li');
    expect(li.exists()).toEqual(true);
    expect(li.props()['data-notification-type']).toEqual("default");
    expect(li.prop('dangerouslySetInnerHTML')).toEqual(html);
    expect(li.text()).toEqual(value);
  });

  it('correct component rendering - case2 - html', () => {
    const html = '<u>test</u>';
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
    const li = wrapper.find('li');
    expect(li.exists()).toEqual(true);
    expect(wrapper.html()).toEqual(`<li data-notification-type=\"default\">${ html }</li>`);
  });
});