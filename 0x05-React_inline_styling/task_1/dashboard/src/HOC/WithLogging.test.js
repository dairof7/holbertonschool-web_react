import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from "aphrodite";

describe('WithLogging', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('log msg when the component has a name', () => {
    const logSpy = jest.spyOn(console, 'log');

    const HocComponent = WithLogging(() => <p />);
    const wrapper = mount(<HocComponent />);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();

    expect(logSpy).toHaveBeenCalledWith(
      'Component Component is going to unmount'
    );

    expect(logSpy).toHaveBeenCalledTimes(2);

    jest.restoreAllMocks();
  });

  it('log msg when the component dont has a name', () => {
    const logSpy = jest.spyOn(console, 'log');

    const HocComponent2 = WithLogging(Login);
    const wrapper = mount(<HocComponent2 />);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();

    expect(logSpy).toHaveBeenCalledWith(
      'Component Login is going to unmount'
    );

    expect(logSpy).toHaveBeenCalledTimes(2);

    jest.restoreAllMocks();
    });
  });