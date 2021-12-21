import { toast } from "react-toastify";

import { coursesTypes } from ".";
import httpServices from "../../utils/ApiServices";
import toasterConfig from "../../utils/toasterCongig";

export const getGovernmentExams = () => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.GOVERNMENT_EXAM_REQUEST });
    const res = await httpServices.get("career/government_exam/");
    dispatch({ type: coursesTypes.GOVERNMENT_EXAM_FINISH, payload: res?.data });
  } catch (error) {
    dispatch({ type: coursesTypes.GOVERNMENT_EXAM_FAIL });
    if (error?.status === 400) {
      toast.error(error.data.errors.error[0], toasterConfig);
    } else if (error?.status === 500) {
      toast.error("Internal Server Error", toasterConfig);
    }
  }
};

export const getTopSchools = () => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.TOP_SCHOOL_REQUEST });
    const res = await httpServices.get("career/government_exam/");
    dispatch({ type: coursesTypes.TOP_SCHOOL_FINISH, payload: res?.data });
  } catch (error) {
    dispatch({ type: coursesTypes.TOP_SCHOOL_FAIL });
    if (error?.status === 400) {
      toast.error(error.data.errors.error[0], toasterConfig);
    } else if (error?.status === 500) {
      toast.error("Internal Server Error", toasterConfig);
    }
  }
};

export const getTopCollages = () => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.TOP_COLLAGE_REQUEST });
    const res = await httpServices.get("career/top-collage-list/");
    dispatch({ type: coursesTypes.TOP_COLLAGE_FINISH, payload: res?.data });
  } catch (error) {
    dispatch({ type: coursesTypes.TOP_COLLAGE_FAIL });
    if (error?.status === 400) {
      toast.error(error.data.errors.error[0], toasterConfig);
    } else if (error?.status === 500) {
      toast.error("Internal Server Error", toasterConfig);
    }
  }
};
