import { toast } from "react-toastify";

import { certificateTypes } from ".";
import { toasterConfig, ApiService, handleErrorMessage } from "../../utils";

export const getUserCourseCertificate =
  (limit = null, offset = null) =>
  async (dispatch) => {
    try {
      const url = "course/user-all-certificate/";
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
      const url = `course/user-certificate/${id}`;
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
      history.push("/all-certificate-page");
    }
  };
