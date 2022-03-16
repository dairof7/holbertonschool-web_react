import * as listNotifications from "../../../../notifications.json"
import { normalize, schema } from 'normalizr';

function getAllNotificationsByUser(userId) {
  /**
   * this function get all Notifications by User
   */

  return listNotifications.default.filter(
      (n) => n.author.id === userId)
        .map((n) => n.context);
}

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid' // default id
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(listNotifications.default, [notification]);
export default getAllNotificationsByUser;
