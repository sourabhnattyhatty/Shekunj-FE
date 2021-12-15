import Cookies from "js-cookie";

import { coursesTypes } from "./types";
import httpServices from "../../utils/ApiServices";

export const allCourses = () => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.COURSES_REQUEST });
    const res = await httpServices.get("/course/home/");
    dispatch({
      type: coursesTypes.COURSES_FINISH,
      payload: res.data.popular_course,
      payload2: res.data.popular_career_test,
    });
  } catch (error) {
    dispatch({ type: coursesTypes.COURSES_FAIL });
  }
};

export const allTests = () => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.TESTS_REQUEST });
    const res = await httpServices.get("/course/online-test-category-list/");
    dispatch({ type: coursesTypes.TESTS_FINISH, payload: res.data });
  } catch (error) {
    dispatch({ type: coursesTypes.TESTS_FAIL });
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

export const startCourse =
  (id, page = 1, progress = 0, onLoad = false) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: coursesTypes.COURSE_REQUEST });
      const currentModule = Cookies.get("module");
      if (currentModule && !onLoad) {
        const singleCourse = await dispatch(getSingleCourseModule(id));
        if (singleCourse && singleCourse.length > 0) {
          progress = Math.round(100 / singleCourse.length || 0);
        }
      }
      const res = await httpServices.get(
        `/course/start-user-course/${id}?page=${page}&progress=${progress}`,
      );
      dispatch({
        type: coursesTypes.COURSE_FINISH,
        payload: res.data,
        progress: res.data.progress ? parseInt(res.data.progress, 10) : 0,
      });
    } catch (error) {
      dispatch({ type: coursesTypes.COURSE_FAIL });
    }
  };

export const getSingleCourseModule = (id) => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.ACCORDIAN_LIST_REQUEST });
    const res = await httpServices.get(`/course/course-module-list/${id}/`);
    dispatch({ type: coursesTypes.ACCORDIAN_LIST_FINISH, payload: res.data });
    return res?.data;
  } catch (error) {
    dispatch({ type: coursesTypes.ACCORDIAN_LIST_FAIL });
    return error;
  }
};

export const getSimilarCourses = (categoryId) => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.SIMILAR_COURSES_REQUEST });
    const res = await httpServices.get(
      `/course/category-detail/${categoryId}/`,
    );
    dispatch({ type: coursesTypes.SIMILAR_COURSES_FINISH, payload: res.data });
  } catch (error) {
    dispatch({ type: coursesTypes.SIMILAR_COURSES_FAIL });
  }
};
