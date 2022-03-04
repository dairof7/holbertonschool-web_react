import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BodySection extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.object
  }

  static defaultProps  = {
    title: '',
    children: []
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bodySection">
        <h2>{ this.props.title }</h2>
        { this.props.children }
      </div>
    )
  }
}
