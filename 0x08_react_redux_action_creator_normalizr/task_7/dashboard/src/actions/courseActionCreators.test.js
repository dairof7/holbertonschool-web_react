import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('Test courseActionCreators.js', () => {
  test('selectCourse', () => {
    const r = selectCourse(1);
    const expected = { type: SELECT_COURSE, index: 1 }
    expect(r).toEqual(expected);
  });

  test('unSelectCourse', () => {
    const r = unSelectCourse(1);
    const expected = { type: UNSELECT_COURSE, index: 1 }
    expect(r).toEqual(expected);
  });
});