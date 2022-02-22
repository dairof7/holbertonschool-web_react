import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import './CourseList.css'
import CourseShape from './CourseShape';


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
      <table id="CourseList">
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
