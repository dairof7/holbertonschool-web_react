import { createSelector } from "reselect";
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

const getNotificationsField = (state) => state.notifications;

export const getUnreadNotificationsByType = createSelector(
  getNotificationsField,
  (notifications)  => {
    const messages = getMessages(notifications);
    const filter = filterTypeSelected(notifications);

    if (messages) {
      if (filter === "URGENT") {
        return Map(messages)
                .valueSeq()
                .filter((notification) => (
                  notification["isRead"] === false &&
                  notification["type"] === "urgent"
                ));
      } else {
        return Map(messages)
                .valueSeq()
                .filter((notification) => notification["isRead"] === false);
      }
    }
    return messages;
  }
);
