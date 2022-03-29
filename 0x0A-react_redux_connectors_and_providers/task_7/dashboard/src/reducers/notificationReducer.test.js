import { 
  setNotificationFilter, markAsAread, FetchNotificationsSuccess
 } from '../actions/notificationActionCreators';
import notificationReducer from './notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';

import { Map, fromJS } from 'immutable';

describe('Test notificationReducer.js', () => {
  const initialState = {
    notifications: {},
    filter: "DEFAULT",
    loading: false,
  };

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



  it('default state returns the initialState', (done) => {
    const r = notificationReducer(undefined, { });
    expect(r.toJS()).toEqual(initialState);
    done();
  });

  it('FETCH_NOTIFICATIONS_SUCCESS action works as expected', (done) => {
    const r = notificationReducer(undefined, FetchNotificationsSuccess(data));
    const expected = notificationsNormalizer([
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ]);
    expect(r.toJS().notifications).toEqual(expected.notifications);
    expect(r.toJS().filter).toEqual('DEFAULT');
    done();
  });

  it('MARK_AS_READ  action works as expected', (done) => {
    const r = notificationReducer(state, markAsAread(2));
    const expected = notificationsNormalizer([
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: true, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ]);
    expect(r.toJS().notifications).toEqual(expected.notifications);
    expect(r.toJS().filter).toEqual('DEFAULT');
    done();
  });

  it('SET_TYPE_FILTER  action works as expected', (done) => {
    const r = notificationReducer(state, setNotificationFilter('URGENT'));
    const expected = notificationsNormalizer([
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ]);
    expect(r.toJS().notifications).toEqual(expected.notifications);
    expect(r.toJS().filter).toEqual('URGENT');
    done();
  });
});