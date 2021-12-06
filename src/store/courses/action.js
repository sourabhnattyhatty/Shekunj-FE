import { coursesTypes } from "./types";
import httpServices from "../../utils/ApiServices";

export const allCourses = () => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.COURSES_REQUEST });
    const res = await httpServices.get("/course/list/");
    debugger
    dispatch({ type: coursesTypes.COURSES_FINISH, payload: res.results });
  } catch (error) {
    dispatch({ type: coursesTypes.COURSES_FAIL });
  }
};

export const singleCourseDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.COURSE_REQUEST });
    const res = await httpServices.get(`/course/detail/${id}/`);
    dispatch({ type: coursesTypes.COURSE_FINISH, payload: res.data });
  } catch (error) {
    dispatch({ type: coursesTypes.COURSE_FAIL });
  }
};
