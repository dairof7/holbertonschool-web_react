import React, { Component } from 'react'
import { getFullYear, getFooterCopy } from '../utils/utils';
import {StyleSheet, css} from 'aphrodite';


export default class Footer extends Component {
  render() {
    return (
      <>
        <p className={ css(styles.p) }>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </>
    )
  }
}

const styles = StyleSheet.create({
  p: {
    textAlign: 'center',
    fontStyle: 'italic'
  }
});
