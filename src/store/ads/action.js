import { adsTypes } from "./types";
import httpServices from "../../utils/ApiServices";
import { apiConstants, routingConstants } from "../../utils/constants";

export const adsList = (pageWisetype,lat=null,long=null) => async (dispatch) => {
  try {
    console.log("response+++TopSchool", lat,long);
    const add = '/private_adds/private_add?image_type=';
    const url = add +`?latitude=${lat}&longitude=${long}`;

    dispatch({ type: adsTypes.ADS_REQUEST });
    // const url = '/private_adds/private_add?image_type=';
    const res = await httpServices.get(`${url}${pageWisetype}`

  );

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

// export const onAdds = (pageWisetype) => async (dispatch) => {
//   try {
  
//     dispatch({ type: adsTypes.ADDS_REQUEST });
//     const url = '/private_adds/click_add/';

//     const res = await httpServices.post(`${url}${pageWisetype}`,{
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


