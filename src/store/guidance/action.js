import { guidanceTypes } from "./types";
import httpServices from "../../utils/ApiServices";
import { toast } from "react-toastify";
import { toasterConfig } from "../../utils";
import i18njs from "../../assets/i18n/i18n"
import { apiConstants, routingConstants } from "../../utils/constants";

const constants = apiConstants.GUIDANCE;

export const bookCounseller = (value) => async (dispatch) => {
  try {
    dispatch({ type: guidanceTypes.BOOK_SESSION_REQUEST });
    const res = await httpServices.post(constants.BOOK_SESSION, value);
    dispatch({ type: guidanceTypes.BOOK_SESSION_FINISH });
    toast.success(res.message, toasterConfig);
  } catch (error) {
    dispatch({ type: guidanceTypes.BOOK_SESSION_FAIL });
    if (error.data.errors.date_of_birth) {
      toast.error(i18njs.t("login.form1.dob.required"), toasterConfig);
    } else if (error.data.errors.gender) {
      toast.error(i18njs.t("login.form1.gender.required"), toasterConfig);
    } else if (error.data.errors.qualifications) {
      toast.error(i18njs.t("login.form1.qualification.required"), toasterConfig);
    } else if (error.data.errors.course_looking_for) {
      toast.error(i18njs.t("login.form1.coursesLookingFor.required"), toasterConfig);
    }
  }
};

export const getGuidanceCategory = () => async (dispatch) => {
  try {
    const url = apiConstants.GUIDANCE.GUIDANCE_CATEGORY;
    dispatch({ type: guidanceTypes.GUIDANCE_CATEGORY_REQUEST });
    const res = await httpServices.get(url);
    dispatch({
      type: guidanceTypes.GUIDANCE_CATEGORY_FINISH_PRIVATE,
      payload: res?.data || [],
    });
    dispatch({
      type: guidanceTypes.GUIDANCE_CATEGORY_FINISH,
      payload: res?.data || [],
    });
  } catch (error) {
    dispatch({
      type: guidanceTypes.GUIDANCE_CATEGORY_FAIL,
      payload: error?.data,
    });
    toast.error(error?.data?.message, toasterConfig);
  }
};

export const getGuidanceCategoryDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: guidanceTypes.GUIDANCE_CATEGORY_DETAIL_REQUEST });
    const res = await httpServices.get(constants.GUIDANCE_CATEGORY + id);
    dispatch({
      type: guidanceTypes.GUIDANCE_CATEGORY_DETAIL_FINISH,
      payload: res.data || null,
    });
  } catch (error) {
    dispatch({
      type: guidanceTypes.GUIDANCE_CATEGORY_DETAIL_FAIL,
      payload: error,
    });
    toast.error(error?.data?.message, toasterConfig);
  }
};

export const resetCategoryDetail = () => (dispatch) => {
  dispatch({ type: guidanceTypes.GUIDANCE_CATEGORY_DETAIL_RESET });
};

export const fetchStartUserCareerTest =
  (id, history, module, progress) => async (dispatch) => {
    try {
      dispatch({
        type: guidanceTypes.FETCH_GUIDANCE_START_USER_CAREER_TEST_REQUEST,
      });
      let res;
      if (module) {
        res = await httpServices.get(
          `career/start-user-career-test/${id}?test_id=${module}`,
        );
      } else if (module && progress > 0) {
        res = await httpServices.get(
          `career/start-user-career-test/${id}?test_id=${module}&progress=${progress}`,
        );
      } else if (progress && progress > 0) {
        res = await httpServices.get(
          `career/start-user-career-test/${id}?progress=${progress}`,
        );
      } else {
        res = await httpServices.get(`career/start-user-career-test/${id}`);
      }
      dispatch({
        type: guidanceTypes.FETCH_GUIDANCE_START_USER_CAREER_TEST_SUCCESS,
        payload: res?.data,
      });
      return res;
    } catch (error) {
      if (error.status === 401) {
        history?.push(`/login?redirect=/SuccessCareerTest`);
      }
      dispatch({
        type: guidanceTypes.FETCH_GUIDANCE_START_USER_CAREER_TEST_FAIL,
        payload: error?.data,
      });
      toast.error(error?.data?.message, toasterConfig);
    }
  };

export const fetchUserCareerTestCount = (id) => async (dispatch) => {
  try {
    dispatch({
      type: guidanceTypes.GUIDANCE_USER_CAREER_TEST_COUNT_REQUEST,
    });
    const res = await httpServices.get(constants.USER_CAREER_COUNT + id);
    dispatch({
      type: guidanceTypes.GUIDANCE_USER_CAREER_TEST_COUNT_SUCCESS,
      payload: res?.data,
    });
    return res;
  } catch (error) {
    dispatch({
      type: guidanceTypes.GUIDANCE_USER_CAREER_TEST_COUNT_FAIL,
      payload: error?.data,
    });
    toast.error(error?.data?.message, toasterConfig);
  }
};

export const postAnswer =
  (values, history, id, last = false) =>
  async (dispatch) => {
    try {
      dispatch({ type: guidanceTypes.POST_ANSWER_REQUEST });
      const res = await httpServices.post(
        `/career/start-user-career-test/${id}`,
        values,
      );
      dispatch({ type: guidanceTypes.POST_ANSWER_FINISH });
      if (res.status_code === 200 && last) {
        await httpServices.post(`/career/user-career-test-end/${id}`);
        history.push(routingConstants.CAREER_TEST_RESULT + id);
      }
    } catch (err) {
      dispatch({ type: guidanceTypes.POST_ANSWER_FAIL });
    }
  };

export const endTest = (id, history) => async (dispatch) => {
  await httpServices.post(`/career/user-career-test-end/${id}`);
  // history.push(`routingConstants.CAREER_TEST_RESULT + selectedCourseCategoryValue?.id);
  history.push(routingConstants.CAREER_TEST_RESULT + id);
};

export const careerTestResult = (id) => async (dispatch) => {
  try {
    dispatch({ type: guidanceTypes.CAREER_RESULT_REQUEST });
    const res = await httpServices.get(`/career/user-career-test-result/${id}`);
    dispatch({ type: guidanceTypes.CAREER_RESULT_FINISH, payload: res.data });
  } catch (error) {
    dispatch({ type: guidanceTypes.CAREER_RESULT_FAIL });
  }
};

export const reStartUserCareerTestEnd = (id) => async (dispatch) => {
  try {
    dispatch({
      type: guidanceTypes.FETCH_GUIDANCE_START_USER_CAREER_TEST_REQUEST,
    });
    const res = await httpServices.post(constants.START_USER_CAREER_TEST + id);
    dispatch({
      type: guidanceTypes.FETCH_GUIDANCE_START_USER_CAREER_TEST_SUCCESS,
      payload: res?.data,
    });
  } catch (error) {
    dispatch({
      type: guidanceTypes.FETCH_GUIDANCE_START_USER_CAREER_TEST_FAIL,
      payload: error?.data,
    });
    toast.error(error?.data?.message, toasterConfig);
  }
};

export const startUserCareerTest = (id) => async (dispatch) => {
  try {
    dispatch({ type: guidanceTypes.GUIDANCE_START_USER_CAREER_TEST_REQUEST });
    await httpServices.post(constants.START_USER_CAREER_TEST + id, {
      answer: "",
      career_test: "",
    });
    dispatch({
      type: guidanceTypes.GUIDANCE_START_USER_CAREER_TEST_SUCCESS,
      payload: null,
    });
  } catch (error) {
    dispatch({
      type: guidanceTypes.GUIDANCE_START_USER_CAREER_TEST_FAIL,
      payload: error?.data,
    });
    toast.error(error?.data?.message, toasterConfig);
  }
};
