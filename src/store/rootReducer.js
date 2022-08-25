import { combineReducers } from "redux";

import { authReducer } from "./auth";
import { coursesReducer } from "./courses";
import { careerReducer } from "./career";
import { guidanceReducer } from "./guidance";
import { myProgressReducer } from "./my-progress";
import { certificateReducer } from "./certificate";
import { languageReducer } from "./language";
import {adsReducer} from "./ads"
import {blogsReducer} from "./blogs"
import { eventsReducer } from "./events";

export default combineReducers({
  authReducer,
  coursesReducer,
  careerReducer,
  guidanceReducer,
  myProgressReducer,
  certificateReducer,
  languageReducer,
  adsReducer,
  blogsReducer,
  eventsReducer,
});
