import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';


const rowStyle = {
  backgroundColor : '#f5f5f5ab'
};

const headerRowStyle = {
  backgroundColor : '#deb5b545'
};

class CourseListRow extends Component {
  render() {
    if (this.props.isHeader) {
      if (this.props.textSecondCell === null) {
        return (
          <tr style={ headerRowStyle } className={ css(styles.tr) }>
            <th colSpan="2" className={ css(styles.th) }>
              { this.props.textFirstCell}
            </th>
          </tr>
        );
      }
      return (
        <tr style={ headerRowStyle } >
          <th className={ css(styles.th) }>
            { this.props.textFirstCell }
          </th>
          <th className={ css(styles.th) }>
            { this.props.textSecondCell }
          </th>
        </tr>
      );
    }
    return (
      <tr style={rowStyle} >
        <td className={ css(styles.td) }>
          { this.props.textFirstCell }
        </td>
        <td className={ css(styles.td) }>
          { this.props.textSecondCell }
        </td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

const styles = StyleSheet.create({
  td: {
    padding: '5px',
    fontWeight: 'normal'
  },
  th: {
    padding: '5px',
    fontWeight: 'bold',
    borderBottom: '3px solid lightgrey'
  },
  tr: {
    textAlign: 'center'
  }
});

export default CourseListRow;
