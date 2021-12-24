import { toast } from "react-toastify";

import { coursesTypes } from ".";
import httpServices from "../../utils/ApiServices";
import toasterConfig from "../../utils/toasterCongig";

export const getGovernmentExams =
  (filter = null) =>
  async (dispatch, getState) => {
    try {
      let url = "career/government-exam/";
      const { courseSector } = getState().careerReducer;
      if (filter) {
      }
      dispatch({ type: coursesTypes.GOVERNMENT_EXAM_REQUEST });
      const res = await httpServices.get(url);
      dispatch({
        type: coursesTypes.GOVERNMENT_EXAM_FINISH,
        payload: res?.data,
      });
    } catch (error) {
      dispatch({ type: coursesTypes.GOVERNMENT_EXAM_FAIL });
      if (error?.status === 400) {
        toast.error(error.data.errors.error[0], toasterConfig);
      } else if (error?.status === 500) {
        toast.error("Internal Server Error", toasterConfig);
      }
    }
  };

export const getTopSchools = () => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.TOP_SCHOOL_REQUEST });
    const res = await httpServices.get("career/top-school-list/");
    dispatch({ type: coursesTypes.TOP_SCHOOL_FINISH, payload: res?.data });
  } catch (error) {
    dispatch({ type: coursesTypes.TOP_SCHOOL_FAIL });
    if (error?.status === 400) {
      toast.error(error.data.errors.error[0], toasterConfig);
    } else if (error?.status === 500) {
      toast.error("Internal Server Error", toasterConfig);
    }
  }
};

export const getTopCollages =
  (filter = null) =>
  async (dispatch, getState) => {
    try {
      let originalUrl = "career/top-collage-list/";
      let url = originalUrl;
      const { courseSector, topCollages } = getState().careerReducer;
      if (filter) {
        const foundCollageType = courseSector?.rows?.filter((r) => r.isChecked);
        let collageTypeString = "";
        if (foundCollageType?.length > 0) {
          collageTypeString = foundCollageType.map((r) => r?.value).join(",");
        } else {
          collageTypeString = undefined;
        }
        const foundCollageStream = topCollages.collage_stream_list.filter(
          (r) => r.isChecked,
        );
        let collageTypeStreamString = undefined;
        if (foundCollageStream?.length > 0) {
          collageTypeStreamString = foundCollageStream
            .map((r) => r?.id)
            .join(",");
        }
        if (collageTypeString) {
          url = originalUrl;
          url = `${url}?collage_type__in=${collageTypeString}`;
        }
        if (collageTypeStreamString) {
          url = originalUrl;
          url = `${url}?college_category_id__in=${collageTypeStreamString}`;
        }
        if (collageTypeString && collageTypeStreamString) {
          url = originalUrl;
          url = `${url}?collage_type__in=${collageTypeString}&college_category_id__in=${collageTypeStreamString}`;
        }
      }
      dispatch({ type: coursesTypes.TOP_COLLAGE_REQUEST });
      const res = await httpServices.get(url);
      let updatedResponse = [];
      if (res?.data?.collage_stream_list?.length > 0) {
        updatedResponse = res?.data?.collage_stream_list.map((r) => {
          r.isChecked = false;
          const foundCollageStream = topCollages?.collage_stream_list?.filter(
            (r) => r.isChecked,
          );
          if (foundCollageStream?.length > 0) {
            foundCollageStream.forEach((f) => {
              if (f.id === r.id) {
                r.isChecked = true;
              }
            });
          }
          return r;
        });
      }
      dispatch({
        type: coursesTypes.TOP_COLLAGE_FINISH,
        payload: {
          ...res?.data,
          collage_stream_list: updatedResponse,
        },
      });
    } catch (error) {
      dispatch({ type: coursesTypes.TOP_COLLAGE_FAIL });
      if (error?.status === 400) {
        toast.error(error.data.errors.error[0], toasterConfig);
      } else if (error?.status === 500) {
        toast.error("Internal Server Error", toasterConfig);
      }
    }
  };

export const setFilterValue =
  (id, action, arrayType) => async (dispatch, getState) => {
    if (arrayType === "courseSector") {
      const { courseSector } = getState().careerReducer;
      const updatedPayload = courseSector;
      const idx = updatedPayload?.rows?.findIndex((u) => u.id === id);
      if (idx !== -1) {
        updatedPayload.rows[idx].isChecked = action;
      }
      dispatch({
        type: coursesTypes.GOVERNMENT_EXAM_FILTER_SET,
        payload: {
          data: updatedPayload,
          type: "courseSector",
        },
      });
      await dispatch(getTopCollages(true));
    } else {
      const { topCollages } = getState().careerReducer;
      const updatedPayload = topCollages;
      const idx = updatedPayload?.collage_stream_list?.findIndex(
        (u) => u.id === id,
      );
      if (idx !== -1) {
        updatedPayload.collage_stream_list[idx].isChecked = action;
      }
      dispatch({
        type: coursesTypes.GOVERNMENT_EXAM_FILTER_SET,
        payload: {
          data: updatedPayload,
          type: "stream",
        },
      });
      await dispatch(getTopCollages(true));
    }
  };
