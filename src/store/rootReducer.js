import { combineReducers } from "redux";

import { authReducer } from "./auth";
import { coursesReducer } from "./courses";
import { careerReducer } from "./career";
import { guidanceReducer } from "./guidance";
import { myProgressReducer } from "./my-progress";
import { certificateReducer } from "./certificate";

export default combineReducers({
  authReducer,
  coursesReducer,
  careerReducer,
  guidanceReducer,
  myProgressReducer,
  certificateReducer,
});
