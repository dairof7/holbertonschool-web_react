
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER } from './uiActionTypes';
import {HIDE_NOTIFICATION_DRAWER }  from './uiActionTypes';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password }
});

export const boundLogin = (email, password) => dispatch(login(email, password));
export const logout = () => ({
  type: LOGOUT
});

export const boundLogout = () => dispatch(logout());

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER
});

export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER
});

export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());
