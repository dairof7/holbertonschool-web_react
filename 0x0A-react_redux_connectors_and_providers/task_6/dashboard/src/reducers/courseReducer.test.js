import { fetchCourseSuccess, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import courseReducer from './courseReducer';
import { coursesNormalizer } from '../schema/courses';

import { Map, fromJS } from 'immutable';

describe('Test courseReducer.js', () => {

  const defaultState = Map([]);
  const state = fromJS(coursesNormalizer([
    { id: 1, name: "ES6", isSelected: false, credit: 60 },
    { id: 2, name: "Webpack", isSelected: false, credit: 20 },
    { id: 3, name: "React", isSelected: false, credit: 40 }
  ]));
  const data = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 }
  ];
  
  it('default state returns an empty array', (done) => {
    const r = courseReducer(undefined, { });
    expect(r.toJS()).toEqual(defaultState.toJS());
    done();
  });

  it('action FETCH_COURSE_SUCCESS works as expected', (done) => {
    const r = courseReducer(undefined, fetchCourseSuccess(data));
    const expected = coursesNormalizer([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ]);
    expect(r.toJS()).toEqual(expected);
    done();
  });

  it('action SELECT_COURSE works as expected', (done) => {
    const r = courseReducer(state, selectCourse(2));
    const expected = coursesNormalizer([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ]);
    expect(r.toJS()).toEqual(expected);
    done();
  });

  it('action UNSELECT_COURSE works as expected', (done) => {
    const state2 = courseReducer(state, selectCourse(2));
    const r = courseReducer(state2, unSelectCourse(2));
    const expected = coursesNormalizer([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ]);
    expect(r.toJS()).toEqual(expected);
    done();
  });
});