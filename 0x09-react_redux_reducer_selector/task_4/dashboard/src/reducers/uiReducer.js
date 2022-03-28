import { 
  LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS, LOGIN_FAILURE,
} from '../actions/uiActionTypes';

import { Map } from 'immutable';

export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
}

export const uiReducer = (state = initialState, action) => {
  state = Map(state);

  switch (action.type) {
    default:
      return state; 
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);
    case LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);
    case LOGOUT:
      return state.set('isUserLoggedIn', false);
  }
};