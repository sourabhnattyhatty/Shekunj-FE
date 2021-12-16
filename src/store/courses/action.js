import Cookies from "js-cookie";

import { coursesTypes } from "./types";
import httpServices from "../../utils/ApiServices";
import { toast } from "react-toastify";
import { toasterConfig } from "../../utils";

export const noImage = 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';

export const allHomeCourses = () => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.HOME_COURSE_REQUEST });
    const res = await httpServices.get("/course/home/");
    debugger;
    dispatch({
      type: coursesTypes.HOME_COURSE_FINISH,
      payload: res.data.popular_course,
      payload2: res.data.popular_career_test,
    });
  } catch (error) {
    dispatch({ type: coursesTypes.HOME_COURSE_FAIL });
  }
};

export const allCourses =
  (filter = null) =>
  async (dispatch) => {
    try {
      dispatch({ type: coursesTypes.COURSES_REQUEST });
      const res = await httpServices.get(
        filter ? `/course/list/${filter}` : `/course/list/`,
      );
      dispatch({
        type: coursesTypes.COURSES_FINISH,
        payload: res,
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
    dispatch({
      type: coursesTypes.SIMILAR_COURSES_FINISH,
      payload: res.data.course_set,
    });
  } catch (error) {
    dispatch({ type: coursesTypes.SIMILAR_COURSES_FAIL });
  }
};

export const getUserTestQuestion =
  (id, history, module, progress) => async (dispatch) => {
    try {
      dispatch({ type: coursesTypes.TEST_QUEDTION_REQUEST });
      let res;
      if (module) {
        res = await httpServices.get(`/course/user-test-course/${id}?test_id=${module}&progress=${progress}`);
      }else if(progress){
        res = await httpServices.get(`/course/user-test-course/${id}?progress=${progress}`);
      } else {
        res = await httpServices.get(`/course/user-test-course/${id}`);
      }
      dispatch({ type: coursesTypes.TEST_QUEDTION_FINISH, payload: res.data });
    } catch (err) {
      debugger
      if (err?.status === 400) {
        history?.push(`/CourseResult`);
      } else if (err.data.status_code === 500) {
        history?.push(`/CourseResult`);
        toast.error(err.data.message, toasterConfig);
      }
      dispatch({ type: coursesTypes.TEST_QUEDTION_FAIL });
    }
  };

export const postAnswer = (values, id) => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.POST_ANSWER_REQUEST });
    await httpServices.post(`/course/user-test-course/${id}`, values);
    dispatch({ type: coursesTypes.POST_ANSWER_FINISH });
  } catch (err) {
    dispatch({ type: coursesTypes.POST_ANSWER_FAIL });
  }
};

export const testCountSummery = (id, history) => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.QUESTION_COUNT_REQUEST });
    const res = await httpServices.get(`/course/user-test-count/${id}`);
    dispatch({ type: coursesTypes.QUESTION_COUNT_FINISH, payload: res.data });
  } catch (err) {
    dispatch({ type: coursesTypes.QUESTION_COUNT_FAIL });
  }
};

export const successStories = () => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.SUCCESS_STORY_REQUEST });
    const res = await httpServices.get("/course/success-story");
    dispatch({ type: coursesTypes.SUCCESS_STORY_FINISH, payload: res.data });
  } catch (err) {
    dispatch({ type: coursesTypes.SUCCESS_STORY_FAIL });
  }
};

export const getCategoryList = () => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.CATEGORY_LIST_REQUEST });
    const res = await httpServices.get("course/category-list/");
    dispatch({ type: coursesTypes.CATEGORY_LIST_FINISH, payload: res.results });
  } catch (error) {
    dispatch({ type: coursesTypes.CATEGORY_LIST_FAIL });
  }
};

export const setFilter =
  (payload = null) =>
  async (dispatch) => {
    dispatch({ type: coursesTypes.SELECTED_FILTER, payload });
  };
