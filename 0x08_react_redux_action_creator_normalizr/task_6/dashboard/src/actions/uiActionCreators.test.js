import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER } from './uiActionTypes';
import { HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer } from './uiActionCreators';
import { hideNotificationDrawer } from './uiActionCreators';

describe('Test uiActionCreators.js', () => {
  it('LOGIN - action creator' , (done) => {
    const r = login('test@test.com', 'test');
    const expected = { type: LOGIN, user: { email: 'test@test.com', password: 'test' } };
    expect(r).toEqual(expected);
    done();
  });

  it('LOGOUT - action creator', (done) => {
    const r = logout(1);
    const expected = { type: LOGOUT };
    expect(r).toEqual(expected);
    done();
  });

  it('DISPLAY_NOTIFICATION_DRAWER - action creator', (done) => {
    const r = displayNotificationDrawer(1);
    const expected = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(r).toEqual(expected);
    done();
  });

  it('HIDE_NOTIFICATION_DRAWER - action creator', (done) => {
    const r = hideNotificationDrawer(1);
    const expected = { type: HIDE_NOTIFICATION_DRAWER };
    expect(r).toEqual(expected);
    done();
  });
});