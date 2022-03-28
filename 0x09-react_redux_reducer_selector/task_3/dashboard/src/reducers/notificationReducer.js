import { 
  FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER
} from '../actions/notificationActionTypes';

export const initialState = {
  notifications: [],
  filter: 'DEFAULT'
}

export const notificationReducer = (state=initialState, action) => {
  switch(action.type) {
    default:
      return state;
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map(
          (notification) => ({...notification, isRead: false })
        ),
      };
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map(
          (notification) => {
            return (action.index === notification.id) ?
              { ...notification, isRead: true } : { ...notification }
          }
        ),
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter
      };
  }

}