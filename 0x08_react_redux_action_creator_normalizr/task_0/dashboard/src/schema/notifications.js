import * as listNotifications from "../../../../notifications.json"

function getAllNotificationsByUser(userId) {

  return listNotifications.default.filter(
      (n) => n.author.id === userId)
        .map((n) => n.context);
}

export default getAllNotificationsByUser;
