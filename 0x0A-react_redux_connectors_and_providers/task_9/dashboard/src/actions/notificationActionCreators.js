  
import {
  MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE, 
} from './notificationActionTypes';

export const markAsAread = (index) => ({ type: MARK_AS_READ, index});
export const boundMarkAsAread = (index) => dispatch(markAsAread(index));
export const setNotificationFilter = (filter) => ({ type: SET_TYPE_FILTER, filter});
export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));
export const FetchNotificationsSuccess = (data) => ({ type: FETCH_NOTIFICATIONS_SUCCESS, data});
export const boundFetchNotificationsSuccess = () => dispatch(setNotificationFilter(data));
export const setLoadingState = (loading) => ({ type: SET_LOADING_STATE, loading });
export const setNotifications = (data) => ({ type: FETCH_NOTIFICATIONS_SUCCESS, data });
export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch("./notifications.json")
      .then((res) => res.json())
      .then((data) => 
        {
          dispatch(setNotifications(data))
          return data
        })
      .catch((error) => {})
      .finally(() => dispatch(setLoadingState(false)));
  };
};
