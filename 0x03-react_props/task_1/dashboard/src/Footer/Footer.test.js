import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

const wrapper = shallow(<Footer/>);

describe("Footer.test.js", () => {
  it('correct component rendering', () => {
    shallow(<Footer />);
  });
  it('correct text - Copyright', () => {
    let tmp  = (wrapper.find('p')
    .text().indexOf('Copyright') !== -1) ? true : false;
    expect(tmp).toEqual(true);
  });
});