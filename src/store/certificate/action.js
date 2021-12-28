import { toast } from "react-toastify";

import { certificateTypes } from ".";
import { toasterConfig, ApiService, handleErrorMessage } from "../../utils";
import { apiConstants, routingConstants } from "../../utils/constants";

const constants = apiConstants.CERTIFICATE;

export const getUserCourseCertificate =
  (limit = null, offset = null) =>
  async (dispatch) => {
    try {
      const url = constants.USER_ALL_CERTIFICATE;
      dispatch({ type: certificateTypes.FETCH_CERTIFICATES_REQUEST });
      const res = await ApiService.get(url);
      dispatch({
        type: certificateTypes.FETCH_CERTIFICATES_FINISH,
        payload: res?.data,
      });
    } catch (error) {
      dispatch({
        type: certificateTypes.FETCH_CERTIFICATES_FAIL,
        payload: error?.data,
      });
      toast.error(handleErrorMessage(error), toasterConfig);
    }
  };

export const getUserCourseCertificateDetail =
  (id, history) => async (dispatch) => {
    try {
      const url = constants.USER_CERTIFICATE + id;
      dispatch({ type: certificateTypes.FETCH_CERTIFICATE_DETAIL_REQUEST });
      const res = await ApiService.get(url);
      dispatch({
        type: certificateTypes.FETCH_CERTIFICATE_DETAIL_FINISH,
        payload: res?.data,
      });
    } catch (error) {
      dispatch({
        type: certificateTypes.FETCH_CERTIFICATE_DETAIL_FAIL,
        payload: error?.data,
      });
      toast.error(handleErrorMessage(error), toasterConfig);
      history.push(routingConstants.ALL_CERTIFICATE_PAGE);
    }
  };
