import { combineReducers } from "redux";

import { authReducer } from "./auth/reducer";
import { coursesReducer } from "./courses/reducer";
import { careerReducer } from "./career";
import { guidanceReducer } from "./guidance";

export default combineReducers({
  authReducer,
  coursesReducer,
  careerReducer,
  guidanceReducer,
});
