import { toast } from "react-toastify";

import { myProgressTypes } from ".";
import { toasterConfig, ApiService } from "../../utils";
import { apiConstants } from "../../utils/constants";
import { handleErrorMessage } from "../../utils/utils";

const constants = apiConstants.MY_PROGRESS;

export const getUserCourseProgress =
  (limit = null, offset = null) =>
  async (dispatch) => {
    try {
      const url = constants.USER_PROGRESS;
      dispatch({ type: myProgressTypes.FETCH_MY_PROGRESS_REQUEST });
      const res = await ApiService.get(url);
      dispatch({
        type: myProgressTypes.FETCH_MY_PROGRESS_FINISH,
        payload: res?.data,
      });
    } catch (error) {
      dispatch({
        type: myProgressTypes.FETCH_MY_PROGRESS_FAIL,
        payload: error?.data,
      });
      toast.error(handleErrorMessage(error), toasterConfig);
    }
  };
