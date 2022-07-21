import { adsTypes } from "./types";
import httpServices from "../../utils/ApiServices";

export const adsList = (pageWisetype) => async (dispatch) => {
  try {

    dispatch({ type: adsTypes.ADS_REQUEST });
    const url = '/private_adds/private_add?image_type=';
    const res = await httpServices.get(`${url}${pageWisetype}`);

    dispatch({
      type: adsTypes.ADS_FINISH,
      payload:
        res?.results?.map((d) => ({
          ...d,
        })) || [],
    });
  } catch (err) {
    dispatch({ type: adsTypes.ADS_FAIL });
  }
};


