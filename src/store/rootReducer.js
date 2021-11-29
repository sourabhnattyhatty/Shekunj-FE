import { authReducer } from "./auth/reducer";
import { coursesReducer } from "./courses/reducer";
import { combineReducers } from "redux";

export default combineReducers({
  authReducer,
  coursesReducer
});
