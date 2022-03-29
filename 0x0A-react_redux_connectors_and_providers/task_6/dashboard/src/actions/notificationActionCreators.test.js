import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { markAsAread, setNotificationFilter } from './notificationActionCreators';

describe('Test notificationActionCreators.js', () => {
  it('markAsAread - action creator' , (done) => {
    const r = markAsAread(1);
    const expected = { type: MARK_AS_READ, index: 1 };
    expect(r).toEqual(expected);
    done();
  });

  it('setNotificationFilter - action creator', (done) => {
    const r = setNotificationFilter('DEFAULT');
    const expected = { type: SET_TYPE_FILTER, filter: 'DEFAULT' };
    expect(r).toEqual(expected);
    done();
  });
});
