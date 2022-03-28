import { 
  FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE
} from '../actions/courseActionTypes';

export const courseReducer = (state = [], action) => {

  switch (action.type) {
    default:
      return state;
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => ({ ...course, isSelected: false }));
    case SELECT_COURSE:
      return state.map((course) => (
        (action.index === course.id) ?
          { ...course, isSelected: true } : { ...course }
      ));
    case UNSELECT_COURSE:
      return state.map((course) => (
        (action.index === course.id) ?
          { ...course, isSelected: false } : { ...course }
      ));
  }
};