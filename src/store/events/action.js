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
  (id) =>
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
      payload: { id: res.data.id, code: res.status_code },
    });
    localStorage.setItem('event_data', JSON.stringify(value))
    toast.success(res.message, toasterConfig);

    setTimeout(() => {
      dispatch({
        type: eventsTypes.BOOK_EVENT_FINISH_CLOSE,
        payload: { id: res.data.id, code: res.status_code },
      });
    }, 3000);

  } catch (error) {
    dispatch({ type: eventsTypes.BOOK_EVENT_FAIL });
    if (error?.data?.errors?.qualifications) {
      toast.error(
        i18njs.t("login.form1.qualification.required"),
        toasterConfig,
      );
    }
  }
};
export const localStData = () => async (dispatch) => {
  let data = JSON.parse(localStorage.getItem('event_data'))
  dispatch({ type: eventsTypes.GET_LOCAL_DATA, payload: data });
};
