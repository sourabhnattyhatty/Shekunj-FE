import { toast } from "react-toastify";
import i18njs from "../../assets/i18n/i18n";
import httpServices from "../../utils/ApiServices";
import { eventsTypes } from ".";
import { toasterConfig, ApiService } from "../../utils";
import { apiConstants } from "../../utils/constants";
import { handleErrorMessage } from "../../utils/utils";

const constants = apiConstants.ALL_EVENTS;

export const getAllEvents =
  (limit = null, offset = null, filter = null) =>
  async (dispatch) => {
    try {
      // const url = constants.ALL_EVENTS+`?latitude=${lat}&longitude=${long}`;
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
export const singleEventDetails =
  (id, lat = "19.8508544", long = "75.3762304") =>
  async (dispatch) => {
    try {
      dispatch({ type: eventsTypes.FETCH_EVENTS_REQUEST });
      const res = await httpServices.get(
        "more/event" + "/" + id,
      );
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

export const bookEvent = (value) => async (dispatch) => {
  try {
    dispatch({ type: eventsTypes.BOOK_EVENT_REQUEST });
    const res = await httpServices.post(constants.BOOK_EVENT, value);
    dispatch({
      type: eventsTypes.BOOK_EVENT_FINISH,
      payload: { id: res.data.id },
    });
    toast.success(res.message, toasterConfig);
  } catch (error) {
    dispatch({ type: eventsTypes.BOOK_EVENT_FAIL });
    if (error.data.errors.qualifications) {
      toast.error(
        i18njs.t("login.form1.qualification.required"),
        toasterConfig,
      );
    }
  }
};
