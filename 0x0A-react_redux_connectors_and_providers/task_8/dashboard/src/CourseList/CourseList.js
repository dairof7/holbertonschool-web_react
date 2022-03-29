import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CourseListRow from './CourseListRow';
// import CourseShape from './CourseShape';
import {StyleSheet, css} from 'aphrodite';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { courseSelector } from "../selectors/courseSelector";

let _ = require('lodash');


export class CourseList extends Component {
  static propTypes = {
    listCourses: PropTypes.object,
    fetchCourses: PropTypes.func,
    selectCourse: PropTypes.func,
    unSelectCourse: PropTypes.func,
  }

  static defaultProps  = {
    listCourses: {},
    fetchCourses: () => {},
    selectCourse: () => {},
    unSelectCourse: () => {},
  }

  constructor(props) {
    super(props);
    this.onChangeRow = this.onChangeRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow(id, checked) {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  }

  generateRows = () => {
    if (_.isEmpty(this.props.listCourses)) {
      return (<tr><td>No course available yet</td></tr>);
    }

    return this.props.listCourses.map((x) =>
        <CourseListRow key={x.id} id={x.id} isHeader={false}
          textFirstCell={x.name} textSecondCell={x.credit}
          onChangeRow={this.onChangeRow} isChecked={x.isSelected}/>
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

export const mapStateToProps = (state) => {
  const coursesList = courseSelector(state.courses);
  return {
    listCourses: coursesList,
  };
};

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);