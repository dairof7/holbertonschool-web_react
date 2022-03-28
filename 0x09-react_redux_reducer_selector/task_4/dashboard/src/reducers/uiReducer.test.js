import { uiReducer } from './uiReducer';

describe('Test reducer.js', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it('initial state when no action is passed', (done) => {
    const r = uiReducer(initialState, '');
    expect(initialState).toEqual(r.toJS());
    done();
  });

  it('action SELECT_COURSE action works as expected', (done) => {
    const r = uiReducer(initialState, 'SELECT_COURSE');
    expect(initialState).toEqual(r.toJS());
    done();
  });

  it('action DISPLAY_NOTIFICATION_DRAWER action works as expected', (done) => {
    const r = uiReducer(initialState, { type: 'DISPLAY_NOTIFICATION_DRAWER' });
    expect(r.get('isNotificationDrawerVisible')).toEqual(true);
    done();
  });
});