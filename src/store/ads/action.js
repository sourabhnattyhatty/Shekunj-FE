import { adsTypes } from "./types";
import httpServices from "../../utils/ApiServices";
import { apiConstants, routingConstants } from "../../utils/constants";

export const adsList =
  // (lat = "19.8508544", long = "75.3762304") =>
  (lat = "", long = "") =>
  async (dispatch) => {
    try {
      const add = "/private_adds/private_add?";
      const url = add + `latitude=${lat}&longitude=${long}`;

      dispatch({ type: adsTypes.ADS_REQUEST });
      // const url = '/private_adds/private_add?image_type=';
      const res = await httpServices.get(`${url}`);

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

// export const onAdds = (lat="19.8508544",long="75.3762304") => async (dispatch) => {
//   try {

//     dispatch({ type: adsTypes.ADDS_REQUEST });
//     const clickAdd = '/private_adds/click_add?';
//     const url = clickAdd + `latitude=${lat}&longitude=${long}`;

//     const res = await httpServices.post(`${url}`,{
//       add_email:"res.data.add_email"
//     }
//   );

//     dispatch({
//       type: adsTypes.ADDS_FINISH,
//       payload:
//       res?.results?.map((d) => ({
//         ...d,
//       })) || [],
//   });
//   } catch (error){
//     dispatch({ type: adsTypes.ADDS_FAIL  });
//   }
// };
