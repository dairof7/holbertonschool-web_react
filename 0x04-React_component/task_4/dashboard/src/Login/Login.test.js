import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

const wrapper = shallow(<Login/>);

describe("Login.test.js", () => {
  it('correct component rendering', () => {
    shallow(<Login />);
  });
  it('inputs exist', () => {
    expect(wrapper.find('input').length).toEqual(2);
  });
  it('labels exist', () => {
    expect(wrapper.find('label').length).toEqual(2);
  });
});
