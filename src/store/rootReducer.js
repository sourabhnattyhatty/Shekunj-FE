import { combineReducers } from "redux";

import { authReducer } from "./auth/reducer";
import { coursesReducer } from "./courses/reducer";
import { careerReducer } from "./career";

export default combineReducers({
  authReducer,
  coursesReducer,
  careerReducer,
});
