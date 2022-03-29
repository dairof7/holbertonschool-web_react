  
import { 
  filterTypeSelected, getNotifications, getUnreadNotifications
} from './notificationSelector';
import {
   FetchNotificationsSuccess, markAsAread
} from '../actions/notificationActionCreators';
import { notificationsNormalizer } from '../schema/notifications';
import { notificationReducer } from '../reducers/notificationReducer';

import { fromJS } from 'immutable';

describe('Test notificationSelector.js', () => {
  const state = fromJS({
    filter: "DEFAULT",
    notifications: notificationsNormalizer([
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ]).notifications
  });

  const data = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", value: "New data available" }
  ];

  it('function filterTypeSelected works as expected', (done) => {
    const r = filterTypeSelected(notificationReducer(undefined, {}));
    expect(r).toEqual('DEFAULT');
    done();
  });

  it('function getNotifications function  works as expected', (done) => {
    const r = getNotifications(
      notificationReducer(undefined, FetchNotificationsSuccess(data))
    );
    const expected = notificationsNormalizer([
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ]);
    expect(r).toEqual(expected.notifications);
    done();
  });

  it('function getUnreadNotifications works as expected', (done) => {
    const r = getUnreadNotifications(
      notificationReducer(state, markAsAread(2))
    );
    const expected = [
      { id: 2, isRead: true, type: 'urgent', value: 'New resume available' }
    ];
    expect(r).toEqual(expected);
    done();
  });
});