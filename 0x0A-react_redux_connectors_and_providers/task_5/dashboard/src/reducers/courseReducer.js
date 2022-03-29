import { 
  FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE
} from '../actions/courseActionTypes';
import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

export const initialState = [];

const courseReducer = (state = Map([]), action) => {
  
  switch (action.type) {
    default:
      return state;
    case FETCH_COURSE_SUCCESS:
      const data = coursesNormalizer(action.data);
      Object.keys(data).map((key) => {
        data[key].isSelected = false
      });
      return state.merge(data);
    case SELECT_COURSE:
      return state.setIn([String(action.index), "isSelected"], true);
    case UNSELECT_COURSE:
      return state.setIn([String(action.index), "isSelected"], false);
  }
};

export default courseReducer;
