import React from 'react';
import { mount } from 'enzyme';
import BodySection from './BodySection';

describe("BodySection.test.js", () => {
  let wrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  it('Correct component rendering', () => {
    wrapper = mount(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders title', () => {
    wrapper = mount(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.find('h2').exists()).toEqual(true);
    expect(wrapper.find('h2').text()).toContain('test title');
  });

  it('renders childs', () => {
    wrapper = mount(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(wrapper.find('p').exists()).toEqual(true);
    expect(wrapper.find('p').text()).toContain('test children node');
  });
  
});