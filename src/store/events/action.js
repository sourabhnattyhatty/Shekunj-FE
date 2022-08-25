import { toast } from "react-toastify";

import { eventsTypes } from ".";
import { toasterConfig, ApiService } from "../../utils";
import { apiConstants } from "../../utils/constants";
import { handleErrorMessage } from "../../utils/utils";

const constants = apiConstants.ALL_EVENTS;

export const getAllEvents =
  (limit = null, offset = null) =>
  async (dispatch) => {
    try {
      const url = constants.ALL_EVENTS;

      dispatch({ type: eventsTypes.FETCH_EVENTS_REQUEST });
      const res = await ApiService.get(url);
      dispatch({
        type: eventsTypes.FETCH_EVENTS_FINISH,
        payload: res?.data,
      });
    } catch (error) {
      dispatch({
        type: eventsTypes.FETCH_EVENTS_FAIL,
        payload: error?.data,
      });
      toast.error(handleErrorMessage(error), toasterConfig);
    }
  };
