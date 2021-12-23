import { guidanceTypes } from "./types";
import httpServices from "../../utils/ApiServices";
import { toast } from "react-toastify";
import { toasterConfig } from "../../utils";

export const bookCounseller = (value) => async (dispatch) => {
  try {
    dispatch({ type: guidanceTypes.BOOK_SESSION_REQUEST });
    const res = await httpServices.post("/course/book-session/", value);
    dispatch({ type: guidanceTypes.BOOK_SESSION_FINISH });
    toast.success(res.message, toasterConfig);
  } catch (error) {
    dispatch({ type: guidanceTypes.BOOK_SESSION_FAIL });
    if (error.data.errors.date_of_birth) {
      toast.error("Date of Birth is required.", toasterConfig);
    } else if (error.data.errors.gender) {
      toast.error("Gender is required.", toasterConfig);
    } else if (error.data.errors.qualifications) {
      toast.error("Qualification is required.", toasterConfig);
    } else if (error.data.errors.course_looking_for) {
      toast.error("Course looking for is required.", toasterConfig);
    }
  }
};

export const getGuidanceCategory =
  (exam_type = "public") =>
  async (dispatch) => {
    try {
      const url = exam_type
        ? `career/guidance-category/?exam_type=${exam_type}`
        : "career/guidance-category/";
      dispatch({ type: guidanceTypes.GUIDANCE_CATEGORY_REQUEST });
      const res = await httpServices.get(url);
      if (exam_type) {
        dispatch({
          type: guidanceTypes.GUIDANCE_CATEGORY_FINISH_PRIVATE,
          payload: res?.data || [],
        });
      } else {
        dispatch({
          type: guidanceTypes.GUIDANCE_CATEGORY_FINISH,
          payload: res?.data || [],
        });
      }
    } catch (error) {
      dispatch({ type: guidanceTypes.GUIDANCE_CATEGORY_FAIL, payload: error });
      toast.error(error?.data?.errors?.error[0], toasterConfig);
    }
  };

export const getGuidanceCategoryDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: guidanceTypes.GUIDANCE_CATEGORY_DETAIL_REQUEST });
    const res = await httpServices.get(`career/guidance-category/${id}`);
    dispatch({
      type: guidanceTypes.GUIDANCE_CATEGORY_DETAIL_FINISH,
      payload: res.data || null,
    });
  } catch (error) {
    dispatch({
      type: guidanceTypes.GUIDANCE_CATEGORY_DETAIL_FAIL,
      payload: error,
    });
    toast.error(error?.data?.errors?.error[0], toasterConfig);
  }
};

export const resetCategoryDetail = () => (dispatch) => {
  dispatch({ type: guidanceTypes.GUIDANCE_CATEGORY_DETAIL_RESET });
};
