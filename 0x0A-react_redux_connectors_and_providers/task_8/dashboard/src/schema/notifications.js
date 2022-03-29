import * as listNotifications from "../../dist/notifications.json";
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid' // default id
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(listNotifications.default, [notification]);

function getAllNotificationsByUser(userId) {
  /**
   * this function get all notifications messages by User
   */
   const {notifications, messages } = normalizedData.entities;
   const r = [];
   for (let key in notifications) {
    if (notifications[key].author == userId)
    r.push(messages[notifications[key].context]);
  }
  return r;
}

export const notificationsNormalizer = (data) => {
  /**
   * returns normalized information. Structure example:
   * {
   *  messages: {
   *    123: { guid: "123", type: "A", value: "abc"},
   *  },
   *  notifications: {
   *    456: {id: "456", author: "789", context: 123},
   *  },
   *  users: {
   *    789: {
   *      id: "789", name: { first: "Pepito", last: "Perez" }, age: 25,
   *      email: "pepito@h.com", picture: "http://placehold.it/32x32"
   *    },
   *  },
   * }
   */
  return normalize(data, [notification]).entities;
};

export default getAllNotificationsByUser;
