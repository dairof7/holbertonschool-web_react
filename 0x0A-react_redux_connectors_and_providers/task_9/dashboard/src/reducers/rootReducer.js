import { Map } from "immutable";
import { combineReducers } from 'redux';
import courseReducer, { initialState as courseRIS } from "./courseReducer";
import notificationReducer, {initialState as notificationRIS } from "./notificationReducer";
import uiReducer, { initialState as uiRIS } from "./uiReducer";

const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});

export const initialState = {
  courses: Map(courseRIS),
  notifications: Map(notificationRIS),
  ui: Map(uiRIS),
};

export default rootReducer;