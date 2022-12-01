import { toast } from "react-toastify";
import httpServices from "../../utils/ApiServices";
import { magzinesTypes } from ".";
import { toasterConfig, ApiService } from "../../utils";
import { apiConstants, routingConstants } from "../../utils/constants";
import { handleErrorMessage } from "../../utils/utils";

const constants = apiConstants.ALL_MAGZINES;

export const getAllMagzines =
  (lat = "19.8508544", long = "75.3762304") =>
  async (dispatch) => {
    try {
      const url = constants.ALL_MAGZINES;

      dispatch({
        type:
          magzinesTypes.FETCH_MAGZINES_REQUEST +
          `?latitude=${lat}&longitude=${long}`,
      });
      const res = await ApiService.get(url);
      console.log("resss", res);
      dispatch({
        type: magzinesTypes.FETCH_MAGZINES_FINISH,
        payload: { ...res?.data, is_collapse: false },
      });
    } catch (error) {
      dispatch({
        type: magzinesTypes.FETCH_MAGZINES_FAIL,
        payload: error?.data,
      });
      toast.error(handleErrorMessage(error), toasterConfig);
    }
  };

export const singleMagzineDetails =
  (id,history, lat = "19.8508544", long = "75.3762304") =>
  async (dispatch) => {
    try {
      dispatch({ type: magzinesTypes.FETCH_MAGZINES_REQUEST });
      const res = await httpServices.get(
        "more/magazines" + "/" + id + `?latitude=${lat}&longitude=${long}`,
      );
      dispatch({
        type: magzinesTypes.FETCH_MAGZINES_FINISH,
        // payload: {
        //   ...res?.data,
        //   image: res?.data.image ? res?.data?.image : httpServices.noImage,
        // },
        payload: res?.data || []
      });
    }  catch (error) {
      if (error.status === 401) {
        history?.push(
          `/sign-up?redirect=${routingConstants.MORE_MAGAZINE}`,
        );
      }
      dispatch({ type: magzinesTypes.FETCH_MAGZINES_FAIL });
    }
  };

export const setCollapseMagzines = (id, action) => (dispatch, getState) => {
  const { magzinesReducer } = getState();

  const { magzines } = magzinesReducer;
  const { magazine_list } = magzines;
  const updatedPayload = [...magazine_list];
  const idx = updatedPayload?.findIndex((u) => u.id === id);

  if (idx !== -1) {
    console.log("idx!!! ", idx);
    updatedPayload[idx].is_collapse = action;
  }
  dispatch({
    type: magzinesTypes.FETCH_MAGZINES_FINISH,
    payload: { ...magzines, magazine_list: updatedPayload },
  });
};
