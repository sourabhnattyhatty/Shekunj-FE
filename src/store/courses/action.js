import { coursesTypes } from "./types";
import httpServices from "../../utils/ApiServices";

export const allCourses = () => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.COURSES_REQUEST });
    const res = await httpServices.get("/course/list/");
    dispatch({ type: coursesTypes.COURSES_FINISH , payload : res.data});
  } catch (error) {
    dispatch({ type: coursesTypes.COURSES_FAIL });
  }
};
