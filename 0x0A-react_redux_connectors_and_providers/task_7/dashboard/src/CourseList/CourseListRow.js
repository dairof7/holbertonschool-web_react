import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';


function CourseListRow (props) {

  const rowStyle = props.isChecked ? css(styles.rowChecked) : css(styles.rowStyle);
  const headerRowStyle = css(styles.tr, styles.headerRowStyle );

  const handleCheck = () => {
    props.onChangeRow(props.id, !props.isChecked);
  };

  if (props.isHeader) {
    if (props.textSecondCell === null) {
      return (
        <tr className={ headerRowStyle }>
          <th colSpan="2" className={ css(styles.th) }>
            { props.textFirstCell}
          </th>
        </tr>
      );
    }
    return (
      <tr className={ headerRowStyle } >
        <th className={ css(styles.th) }>
          { props.textFirstCell }
        </th>
        <th className={ css(styles.th) }>
          { props.textSecondCell }
        </th>
      </tr>
    );
  }
  return (
    <tr className={ rowStyle } >
      <td className={ css(styles.td) }>
      <input type="checkbox" onChange={handleCheck}/>
        { props.textFirstCell }
      </td>
      <td className={ css(styles.td) }>
        { props.textSecondCell }
      </td>
    </tr>
  );
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
  },
  rowChecked : {
    backgroundColor: '#e6e4e4'
  },
  rowStyle: {
    backgroundColor : '#f5f5f5ab'
  },
  headerRowStyle: {
    backgroundColor : '#deb5b545'
  },
});

export default CourseListRow;
