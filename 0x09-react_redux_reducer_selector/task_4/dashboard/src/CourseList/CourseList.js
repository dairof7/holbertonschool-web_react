import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import {StyleSheet, css} from 'aphrodite';


export default class CourseList extends Component {
  static propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
  }

  static defaultProps  = {
    listCourses: []
  }

  generateRows = () => {
    if (this.props.listCourses.length <= 0) {
      return (<tr><td>No course available yet</td></tr>);
    }
    return this.props.listCourses.map((x) =>
        <CourseListRow key={x.id} isHeader={false} textFirstCell={x.name} textSecondCell={x.credit} />
    );
  }

  render() {
    return (
      <table id="CourseList" className={ css(styles.table) }>
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
          <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
        <tbody>
          { this.generateRows() }
        </tbody>
      </table>
    )
  }
}

const styles = StyleSheet.create({
  table: {
    textAlign: 'left',
    margin: '10px',
    border: '1px solid lightgrey',
    width: '100%'
  }
});