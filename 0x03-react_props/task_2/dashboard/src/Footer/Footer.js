import React, { Component } from 'react'
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </>
    )
  }
}
