  
import { Map } from 'immutable';

export const filterTypeSelected = (state) => {
  return state.get('filter');
};

export const getNotifications = (state) => {
  return state.get('notifications');
};

export const getMessages = (state) => {
  /**
   * return notification messages
   */
  return state.get('messages');
};

export const getUnreadNotifications = (state) => {
  const messages = getMessages(state);
  if (messages) {
    return  Map(messages)
              .valueSeq()
              .filter((notification) => notification["isRead"] === false);
  }
  return messages;
};