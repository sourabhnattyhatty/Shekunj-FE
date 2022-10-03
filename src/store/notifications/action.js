import { toast } from "react-toastify";

import { notificationsTypes } from ".";
import { toasterConfig, ApiService } from "../../utils";
import { apiConstants } from "../../utils/constants";
import { handleErrorMessage } from "../../utils/utils";

const constants = apiConstants.ALL_NOTIFICATION;

export const getAllNotifications =
  (limit = null, offset = null) =>
  async (dispatch) => {
    try {
      const url = constants.ALL_NOTIFICATION;

      dispatch({ type: notificationsTypes.FETCH_NOTIFICATIONS_REQUEST });
      const res = await ApiService.get(url);
      dispatch({
        type: notificationsTypes.FETCH_NOTIFICATIONS_FINISH,
        payload: res?.data,
      });
    } catch (error) {
      dispatch({
        type: notificationsTypes.FETCH_NOTIFICATIONS_FAIL,
        payload: error?.data,
      });
      toast.error(handleErrorMessage(error), toasterConfig);
    }
  };
