import { toast } from "react-toastify";
import httpServices from "../../utils/ApiServices";
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
  export const singleEventDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type:eventsTypes.FETCH_EVENTS_REQUEST });
      const res = await httpServices.get("more/event" + "/" + id);
      dispatch({
        type: eventsTypes.FETCH_EVENTS_FINISH,
        // payload: {
        //   ...res?.data,
        //   image: res?.data.image ? res?.data?.image : httpServices.noImage,
        // },
        payload: res?.data,
      });
    } catch (error) {
      dispatch({ type: eventsTypes.FETCH_EVENTS_FAIL });
    }
  };
