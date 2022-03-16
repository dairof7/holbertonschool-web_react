
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER } from './uiActionTypes';
import {HIDE_NOTIFICATION_DRAWER }  from './uiActionTypes';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
// import { bindActionCreators } from 'redux'

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password }
});

export const boundLogin = (dispatch, email, password) => dispatch(login(email, password));

export const logout = () => ({
  type: LOGOUT
});

export const boundLogout = (dispatch) => dispatch(logout());

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER
});

export const boundDisplayNotificationDrawer = (dispatch) => dispatch(displayNotificationDrawer());

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER
});

export const boundHideNotificationDrawer = (dispatch) => dispatch(hideNotificationDrawer());

export const loginSuccess = () => ({type: LOGIN_SUCCESS});
export const boundLoginSuccess = (dispatch) => dispatch(loginSuccess());

export const loginFailure = () => ({type: LOGIN_FAILURE});
export const boundLoginFailure = (dispatch) => dispatch(loginFailure());

export const loginRequest = (email, password) => {
  return (dispatch) => {
    boundLogin(dispatch, email, password);
    return fetch("http://localhost:8564/login-success.json")
      .then((res) => res.json())
      .then((json) => boundLoginSuccess(dispatch))
      .catch((error) => boundLoginFailure(dispatch));
  };
}
