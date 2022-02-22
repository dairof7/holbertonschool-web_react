import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySection.css';


export default class BodySectionWithMarginBottom extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.object
  }

  static defaultProps  = {
    title: '',
    children: []
  }

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection { ...this.props } />
      </div>
    )
  }
}
