import { toast } from "react-toastify";

import { faqTypes } from ".";
import { toasterConfig, ApiService } from "../../utils";
import { apiConstants } from "../../utils/constants";
import { handleErrorMessage } from "../../utils/utils";

const constants = apiConstants.FAQ;

export const getFaq =(limit = null, offset = null) =>
  async (dispatch) => {
    try {
      const url = constants.FAQ;
      dispatch({ type: faqTypes.FETCH_FAQ_REQUEST });
      const res = await ApiService.get(url);
      dispatch({
        type: faqTypes.FETCH_FAQ_FINISH,
        payload: res?.data
      });
    } catch (error) {
      dispatch({
        type: faqTypes.FETCH_FAQ_FAIL,
        payload: error?.data,
      });
      toast.error(handleErrorMessage(error), toasterConfig);
    }
  };
