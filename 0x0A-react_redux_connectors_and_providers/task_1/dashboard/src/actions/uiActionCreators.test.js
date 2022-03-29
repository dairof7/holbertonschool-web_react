import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER } from './uiActionTypes';
import { HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import { login, logout, displayNotificationDrawer } from './uiActionCreators';
import { hideNotificationDrawer, loginRequest } from './uiActionCreators';
import fetchMock from 'fetch-mock';
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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

  it('LOGING_SUCCESS - fake API response', (done) => {
    const store = mockStore({});

    fetchMock.get("http://localhost:8564/login-success.json", "{}");
    return store
      .dispatch(loginRequest("abc@abc.com", "abc"))
      .then(() => {
        const expected = { type: LOGIN, user: { email: 'abc@abc.com', password: 'abc' } };
        const r1 = store.getActions()[0];
        const expected2 = { type: LOGIN_SUCCESS };
        const r2 = store.getActions()[1];

        expect(r1).toEqual(expected);
        expect(r2).toEqual(expected2);
        done();
      });
  });

  it('LOGIN_FAILURE - fake API response', (done) => {
    const store = mockStore({});

    fetchMock.get("http://localhost:8564/login-success.json", 500, { overwriteRoutes: true });
    return store
      .dispatch(loginRequest("abc@abc.com", "abc"))
      .then(() => {
        const expected = { type: LOGIN, user: { email: 'abc@abc.com', password: 'abc' } };
        const r1 = store.getActions()[0];
        const expected2 = { type: LOGIN_FAILURE };
        const r2 = store.getActions()[1];

        expect(r1).toEqual(expected);
        expect(r2).toEqual(expected2);
        done();
      });
  });
});