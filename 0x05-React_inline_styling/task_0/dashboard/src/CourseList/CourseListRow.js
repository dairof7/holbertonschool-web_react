import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          <tr style={ headerRowStyle }>
            <th colSpan="2">
              { this.props.textFirstCell}
            </th>
          </tr>
        );
      }
      return (
        <tr style={ headerRowStyle }>
          <th>
            { this.props.textFirstCell }
          </th>
          <th>
            { this.props.textSecondCell }
          </th>
        </tr>
      );
    }
    return (
      <tr style={rowStyle}>
        <td>
          { this.props.textFirstCell }
        </td>
        <td>
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

export default CourseListRow;
