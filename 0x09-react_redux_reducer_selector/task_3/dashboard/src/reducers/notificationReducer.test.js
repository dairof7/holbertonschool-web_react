import {
  FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { 
  setNotificationFilter, markAsAread, FetchNotificationsSuccess
 } from '../actions/notificationActionCreators';
import { notificationReducer } from './notificationReducer';

describe('Test notificationReducer.js', () => {
  const initialState = {
    notifications: [],
    filter: "DEFAULT",
  };

  const state = {
    filter: "DEFAULT",
    notifications: [
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ]
  };

  const data = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", value: "New data available" }
  ];



  it('default state returns the initialState', (done) => {
    const r = notificationReducer(undefined, { });
    expect(r).toEqual(initialState);
    done();
  });

  it('FETCH_NOTIFICATIONS_SUCCESS action works as expected', (done) => {
    const r = notificationReducer(undefined, FetchNotificationsSuccess(data));
    const expected = [
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ];
    expect(r.notifications).toEqual(expected);
    expect(r.filter).toEqual('DEFAULT');
    done();
  });

  it('MARK_AS_READ  action works as expected', (done) => {
    const r = notificationReducer(state, markAsAread(2));
    const expected = [
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: true, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ];
    expect(r.notifications).toEqual(expected);
    expect(r.filter).toEqual('DEFAULT');
    done();
  });

  it('SET_TYPE_FILTER  action works as expected', (done) => {
    const r = notificationReducer(state, setNotificationFilter('URGENT'));
    const expected = [
      { id: 1, isRead: false, type: "default", value: "New course available" },
      { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      { id: 3, isRead: false, type: "urgent", value: "New data available" }
    ];
    expect(r.notifications).toEqual(expected);
    expect(r.filter).toEqual('URGENT');
    done();
  });
});