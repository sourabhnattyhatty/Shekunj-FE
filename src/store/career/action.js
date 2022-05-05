import { toast } from "react-toastify";

import { coursesTypes } from ".";
import httpServices from "../../utils/ApiServices";
import { apiConstants } from "../../utils/constants";
import toasterConfig from "../../utils/toasterCongig";

const constants = apiConstants.CAREER;

export const getGovernmentExams =
  (filter = null) =>
  async (dispatch, getState) => {
    try {
      let url = constants.GOVERNMENT_EXAMS;
      const { governmentExams } = getState().careerReducer;
      if (filter) {
        const foundExams = governmentExams?.govt_category?.filter(
          (r) => r?.isChecked,
        );
        if (foundExams?.length > 0) {
          url = `${url}?govt_category_id__in=${foundExams
            .map((r) => r?.id)
            .join(",")}`;
        }
      }
      dispatch({ type: coursesTypes.GOVERNMENT_EXAM_REQUEST });
      const res = await httpServices.get(url);
      let updatedResponse = res?.data;
      const { govt_category } = res?.data;
      if (govt_category?.length > 0) {
        updatedResponse.govt_category = govt_category.map((g) => {
          g.isChecked = false;
          const foundCollageStream = governmentExams.govt_category?.filter(
            (r) => r.isChecked,
          );
          if (foundCollageStream?.length > 0) {
            foundCollageStream.forEach((f) => {
              if (f.id === g.id) g.isChecked = true;
            });
          }
          return g;
        });
      }
      dispatch({
        type: coursesTypes.GOVERNMENT_EXAM_FINISH,
        payload: updatedResponse,
      });
    } catch (error) {
      dispatch({
        type: coursesTypes.GOVERNMENT_EXAM_FAIL,
        payload: error?.data,
      });
      toast.error(error?.data?.message, toasterConfig);
    }
  };

const handleTopSchoolsFilter = (topSchools, courseSector) => {
  const url = constants.TOP_SCHOOL_LIST;
  const stateList = topSchools?.state_list?.filter((r) => r?.isChecked);
  let stateIdString = undefined;
  if (stateList?.length > 0) {
    stateIdString = `state__in=${stateList.map((r) => r?.name).join(",")}`;
  }
  const boardList = topSchools?.board_list?.filter((r) => r?.isChecked);
  let boardIdString = undefined;
  if (boardList?.length > 0) {
    boardIdString = `board_type__in=${boardList.map((r) => r?.name).join(",")}`;
  }
  const schoolList = courseSector?.rows?.filter((r) => r?.isChecked);
  let schoolIdString = undefined;
  if (schoolList?.length > 0) {
    schoolIdString = `school_type__in=${schoolList
      .map((r) => r?.value)
      .join(",")}`;
  }
  if (stateIdString && !boardIdString && !schoolIdString) {
    return `${url}?${stateIdString}`;
  }
  if (!stateIdString && boardIdString && !schoolIdString) {
    return `${url}?${boardIdString}`;
  }
  if (!stateIdString && !boardIdString && schoolIdString) {
    return `${url}?${schoolIdString}`;
  }
  if (stateIdString && boardIdString && !schoolIdString) {
    return `${url}?${stateIdString}&${boardIdString}`;
  }
  if (!stateIdString && boardIdString && schoolIdString) {
    return `${url}?${boardIdString}&${schoolIdString}`;
  }
  if (stateIdString && !boardIdString && schoolIdString) {
    return `${url}?${stateIdString}&${schoolIdString}`;
  }
  if (stateIdString && boardIdString && schoolIdString) {
    return `${url}?${stateIdString}&${boardIdString}&${schoolIdString}`;
  }
  return url;
};

export const getTopSchools =
  (filter = null) =>
  async (dispatch, getState) => {
    try {
      const url = constants.TOP_SCHOOL_LIST;
      const { topSchools, courseSector } = getState().careerReducer;
      dispatch({ type: coursesTypes.TOP_SCHOOL_REQUEST });
      const res = await httpServices.get(
        filter ? handleTopSchoolsFilter(topSchools, courseSector) : url,
      );
      let updatedPayload = res?.data;
      let updatedResponse = res?.data;
      updatedResponse.state_list = updatedResponse?.state_list?.map(
        (obj, idx) => ({
          id: idx,
          name: obj,
          isChecked: false,
        }),
      );
      updatedResponse.board_list = updatedResponse?.board_list?.map(
        (obj, idx) => ({
          id: idx,
          name: obj,
          isChecked: false,
        }),
      );
      const { state_list, board_list } = updatedResponse;
      if (state_list?.length > 0) {
        updatedPayload.state_list = state_list.map((r) => {
          r.isChecked = false;
          const foundStateList = topSchools?.state_list?.filter(
            (r) => r.isChecked,
          );
          if (foundStateList?.length > 0) {
            foundStateList.forEach((f) => {
              if (f.name === r.name) {
                r.isChecked = true;
              }
            });
          }
          return r;
        });
      }

      if (board_list?.length > 0) {
        updatedPayload.board_list = board_list.map((r) => {
          r.isChecked = false;
          const foundBoardList = topSchools?.board_list?.filter(
            (r) => r.isChecked,
          );
          if (foundBoardList?.length > 0) {
            foundBoardList.forEach((f) => {
              if (f.name === r.name) {
                r.isChecked = true;
              }
            });
          }
          return r;
        });
      }
      dispatch({
        type: coursesTypes.TOP_SCHOOL_FINISH,
        payload: updatedPayload,
      });
    } catch (error) {
      dispatch({ type: coursesTypes.TOP_SCHOOL_FAIL, payload: error?.data });
      toast.error(error?.data?.message, toasterConfig);
    }
  };

const handleTopCollagesFilter = (topCollages, courseSector) => {
  const url = constants.TOP_COLLEGE_LIST;
  const streamList = topCollages.collage_stream_list?.filter(
    (r) => r?.isChecked,
  );
  let streamIdString = undefined;
  if (streamList?.length > 0) {
    streamIdString = `college_category_id__in=${streamList
      .map((r) => r?.id)
      .join(",")}`;
  }

  const collageList = courseSector?.rows?.filter((r) => r?.isChecked);
  let collageIdString = undefined;
  if (collageList?.length > 0) {
    collageIdString = `collage_type__in=${collageList
      .map((r) => r?.value)
      .join(",")}`;
  }
  if (streamIdString && !collageIdString) {
    return `${url}?${streamIdString}`;
  }
  if (!streamIdString && collageIdString) {
    return `${url}?${collageIdString}`;
  }
  if (streamIdString && collageIdString) {
    return `${url}?${streamIdString}&${collageIdString}`;
  }
  return url;
};

export const getTopCollages =
  (filter = null) =>
  async (dispatch, getState) => {
    try {
      const url = constants.TOP_COLLEGE_LIST;
      const { courseSector, topCollages } = getState().careerReducer;
      dispatch({ type: coursesTypes.TOP_COLLAGE_REQUEST });
      const res = await httpServices.get(
        filter ? handleTopCollagesFilter(topCollages, courseSector) : url,
      );
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
          collage_list:
            res?.data?.collage_list?.map((r) => ({
              ...r,
              is_collapse: false,
            })) || [],
        },
      });
    } catch (error) {
      dispatch({ type: coursesTypes.TOP_COLLAGE_FAIL, payload: error?.data });
      toast.error(error?.data?.message, toasterConfig);
    }
  };


  export const singleCareerDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: coursesTypes.TOP_COLLAGE_REQUEST });
      const res = await httpServices.get(constants.TOP_COLLEGES + "/" + id );

      console.log("ttttttttt", res)
      dispatch({
        type: coursesTypes.TOP_COLLAGE_FINISH,
        payload: {
          ...res?.data,
          image: res?.data.image ? res?.data?.image : httpServices.noImage,
        },
      });
    } catch (error) {
      dispatch({ type: coursesTypes.TOP_COLLAGE_FAIL });
    }
  };



export const setFilterValue =
  (id, action, arrayType, subType) => async (dispatch, getState) => {
    const { courseSector, topCollages, topSchools, governmentExams } =
      getState().careerReducer;
    if (arrayType === "governmentExam") {
      const updatedPayload = governmentExams;
      const idx = updatedPayload?.govt_category?.findIndex((u) => u.id === id);
      if (idx !== -1) {
        updatedPayload.govt_category[idx].isChecked = action;
      }
      dispatch({
        type: coursesTypes.GOVERNMENT_EXAM_FINISH,
        payload: updatedPayload,
      });
      await dispatch(getGovernmentExams(true));
    } else if (arrayType === "courseSector") {
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
    } else if (arrayType === "topSchools") {
      if (subType === "states") {
        const updatedPayload = topSchools;
        const idx = updatedPayload?.state_list?.findIndex((u) => u.id === id);
        if (idx !== -1) {
          updatedPayload.state_list.filter((item, index) => {
            return item.id !== id
              ? (updatedPayload.state_list[index].isChecked = false)
              : null;
          });
          updatedPayload.state_list[idx].isChecked = action;
        }
        dispatch({
          type: coursesTypes.TOP_SCHOOL_FINISH,
          payload: updatedPayload,
        });
        await dispatch(getTopSchools(true));
      }
      if (subType === "ownership") {
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
        await dispatch(getTopSchools(true));
      }
      if (subType === "educationBoard") {
        const updatedPayload = topSchools;
        const idx = updatedPayload?.board_list?.findIndex((u) => u.id === id);
        if (idx !== -1) {
          updatedPayload.board_list[idx].isChecked = action;
        }
        dispatch({
          type: coursesTypes.TOP_SCHOOL_FINISH,
          payload: updatedPayload,
        });
        await dispatch(getTopSchools(true));
      }
    } else {
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

export const reSetFilterValue = () => async (dispatch) => {
  dispatch({
    type: coursesTypes.GOVERNMENT_EXAM_FILTER_RESET,
  });
};

export const toggleCollapseValue =
  (id, action, type) => (dispatch, getState) => {
    const { topCollages, topSchools, governmentExams } =
      getState().careerReducer;
    if (type === "topCollages") {
      const updatedPayload = topCollages;
      const idx = updatedPayload?.collage_list?.findIndex((u) => u.id === id);
      if (idx !== -1) updatedPayload.collage_list[idx].is_collapse = action;
      dispatch({
        type: coursesTypes.TOP_COLLAGE_FINISH,
        payload: updatedPayload,
      });
    } else if (type === "topSchools") {
      const updatedPayload = topSchools;
      const idx = updatedPayload?.result?.findIndex((u) => u.id === id);
      if (idx !== -1) updatedPayload.result[idx].is_collapse = action;
      dispatch({
        type: coursesTypes.TOP_SCHOOL_FINISH,
        payload: updatedPayload,
      });
    } else if (type === "governmentExams") {
      const updatedPayload = governmentExams;
      const idx = updatedPayload?.govt_list?.findIndex((u) => u.id === id);
      if (idx !== -1) updatedPayload.govt_list[idx].is_collapse = action;
      dispatch({
        type: coursesTypes.GOVERNMENT_EXAM_FINISH,
        payload: updatedPayload,
      });
    }
  };


