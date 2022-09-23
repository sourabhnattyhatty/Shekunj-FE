import { ColorLensOutlined } from "@mui/icons-material";
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
        let url = constants.GOVERNMENT_SCHEMES;
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
  const cityList = topSchools?.city_list?.filter((r) => r?.isChecked);
  let cityIdString = undefined;
  if (cityList?.length > 0) {
    cityIdString = `city__in=${cityList.map((r) => r?.name).join(",")}`;
  }
  const categoryList = topSchools?.gender_intech?.filter((r) => r?.isChecked);
  let categoryIdString = undefined;
  if (categoryList?.length > 0) {
    categoryIdString = `gender_intech__in=${categoryList.map((r) => r?.name).join(",")}`;
  }
  const boardList = topSchools?.board_list?.filter((r) => r?.isChecked);
  let boardIdString = undefined;
  if (boardList?.length > 0) {
    boardIdString = `board_type__in=${boardList.map((r) => r?.name).join(",")}`;
  }
  const schoolList = topSchools?.school_type?.filter((r) => r?.isChecked);
  let schoolIdString = undefined;
  if (schoolList?.length > 0) {
    schoolIdString = `school_type__in=${schoolList
      .map((r) => r?.name)
      .join(",")}`;
  }

  if (stateIdString && !cityIdString && !categoryIdString && !boardIdString && !schoolIdString) {
    return `${url}?${stateIdString}`;
  }
  if (!stateIdString && cityIdString && !categoryIdString && !boardIdString && !schoolIdString) {
    return `${url}?${cityIdString}`;
  }
  if (!stateIdString && !cityIdString && categoryIdString && !boardIdString && !schoolIdString) {
    return `${url}?${categoryIdString}`;
  }
  if (!stateIdString && !cityIdString && !categoryIdString && boardIdString && !schoolIdString) {
    return `${url}?${boardIdString}`;
  }
  if (!stateIdString && !cityIdString && !categoryIdString && !boardIdString && schoolIdString) {
    return `${url}?${schoolIdString}`;
  }
  //222
  if (stateIdString && cityIdString && !categoryIdString && !boardIdString && !schoolIdString) {
    return `${url}?${stateIdString}&${cityIdString}`;
  }
  if (stateIdString && !cityIdString && categoryIdString && !boardIdString && !schoolIdString) {
    return `${url}?${stateIdString}&${categoryIdString}`;
  }
  if (stateIdString && !cityIdString && !categoryIdString && boardIdString && !schoolIdString) {
    return `${url}?${stateIdString}&${boardIdString}`;
  }
  if (stateIdString && !cityIdString && !categoryIdString && !boardIdString && schoolIdString) {
    return `${url}?${stateIdString}&${schoolIdString}`;
  }
  if (!stateIdString && cityIdString && categoryIdString && !boardIdString && !schoolIdString) {
    return `${url}?${cityIdString}&${categoryIdString}`;
  }
  if (!stateIdString && cityIdString && !categoryIdString && boardIdString && !schoolIdString) {
    return `${url}?${cityIdString}&${boardIdString}`;
  }
  if (!stateIdString && cityIdString && !categoryIdString && !boardIdString && schoolIdString) {
    return `${url}?${cityIdString}&${schoolIdString}`;
  }
  if (!stateIdString && !cityIdString && categoryIdString && boardIdString && !schoolIdString) {
    return `${url}?${categoryIdString}&${boardIdString}`;
  }
  if (!stateIdString && !cityIdString && categoryIdString && !boardIdString && schoolIdString) {
    return `${url}?${categoryIdString}&${schoolIdString}`;
  }
  if (!stateIdString && !cityIdString && !categoryIdString && boardIdString && schoolIdString) {
    return `${url}?${boardIdString}&${schoolIdString}`;
  }
  //333
  if (stateIdString && cityIdString && categoryIdString && !boardIdString && !schoolIdString) {
    return `${url}?${stateIdString}&${cityIdString}&${categoryIdString}`;
  }
  if (stateIdString && !cityIdString && categoryIdString && boardIdString && !schoolIdString) {
    return `${url}?${stateIdString}&${categoryIdString}&${boardIdString}`;
  }
  if (stateIdString && !cityIdString && !categoryIdString && boardIdString && schoolIdString) {
    return `${url}?${stateIdString}&${boardIdString}&${schoolIdString}`;
  }
  if (!stateIdString && cityIdString && categoryIdString && boardIdString && !schoolIdString) {
    return `${url}?${cityIdString}&${categoryIdString}&${boardIdString}`;
  }
  if (!stateIdString && cityIdString && !categoryIdString && boardIdString && schoolIdString) {
    return `${url}?${cityIdString}&${boardIdString}&${schoolIdString}`;
  }
  if (!stateIdString && !cityIdString && categoryIdString && boardIdString && schoolIdString) {
    return `${url}?${categoryIdString}&${boardIdString}&${schoolIdString}`;
  }
  if (stateIdString && cityIdString && !categoryIdString && boardIdString && !schoolIdString) {
    return `${url}?${stateIdString}&${cityIdString}&${boardIdString}`;
  }
  //444
  if (stateIdString && cityIdString && categoryIdString && boardIdString && !schoolIdString) {
    return `${url}?${stateIdString}&${cityIdString}&${categoryIdString}&${boardIdString}`;
  }
  if (!stateIdString && cityIdString && categoryIdString && boardIdString && schoolIdString) {
    return `${url}?${cityIdString}&${categoryIdString}&${boardIdString}&${schoolIdString}`;
  }
  if (stateIdString && !cityIdString && categoryIdString && boardIdString && schoolIdString) {
    return `${url}?${stateIdString}&${categoryIdString}&${boardIdString}&${schoolIdString}`;
  }
  if (stateIdString && cityIdString && !categoryIdString && boardIdString && schoolIdString) {
    return `${url}?${stateIdString}&${cityIdString}&${boardIdString}&${schoolIdString}`;
  }
  if (stateIdString && cityIdString && categoryIdString && !boardIdString && schoolIdString) {
    return `${url}?${stateIdString}&${cityIdString}&${categoryIdString}&${schoolIdString}`;
  }

  //55
  if (stateIdString && cityIdString && categoryIdString && boardIdString && schoolIdString) {
    return `${url}?${stateIdString}&${cityIdString}&${categoryIdString}&${boardIdString}&${schoolIdString}`;
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
          filter === true ? handleTopSchoolsFilter(topSchools, courseSector)
            : filter ? url + filter : url,
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
        updatedResponse.city_list = updatedResponse?.city_list?.map(
          (obj, idx) => ({
            id: idx,
            name: obj,
            isChecked: false,
          }),
        );
        updatedResponse.gender_intech = updatedResponse?.gender_intech?.map(
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
        updatedResponse.school_type = updatedResponse?.school_type?.map(
          (obj, idx) => ({
            id: idx,
            name: obj,
            isChecked: false,
          }),
        );
        const { state_list, board_list, city_list, gender_intech, school_type } = updatedResponse;
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
        if (city_list?.length > 0) {
          updatedPayload.city_list = city_list.map((r) => {
            r.isChecked = false;
            const foundCityList = topSchools?.city_list?.filter(
              (r) => r.isChecked,
            );
            if (foundCityList?.length > 0) {
              foundCityList.forEach((f) => {
                if (f.name === r.name) {
                  r.isChecked = true;
                }
              });
            }
            return r;
          });
        }

        if (school_type?.length > 0) {
          updatedPayload.school_type = school_type.map((r) => {
            r.isChecked = false;
            const foundSchoolList = topSchools?.school_type?.filter(
              (r) => r.isChecked,
            );
            if (foundSchoolList?.length > 0) {
              foundSchoolList.forEach((f) => {
                if (f.name === r.name) {
                  r.isChecked = true;
                }
              });
            }
            return r;
          });
        }
        if (gender_intech?.length > 0) {
          updatedPayload.gender_intech = gender_intech.map((r) => {
            r.isChecked = false;
            const foundCategoryList = topSchools?.gender_intech?.filter(
              (r) => r.isChecked,
            );
            if (foundCategoryList?.length > 0) {
              foundCategoryList.forEach((f) => {
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
  const stateList = topCollages?.state_list?.filter((r) => r?.isChecked);

  let stateIdString = undefined;
  if (stateList?.length > 0) {
    stateIdString = `state__in=${stateList.map((r) => r?.name).join(",")}`;
  }

  const cityList = topCollages?.city_list?.filter((r) => r?.isChecked);

  let cityIdString = undefined;
  if (cityList?.length > 0) {
    cityIdString = `city__in=${cityList.map((r) => r?.name).join(",")}`;
  }

  const streamList = courseSector?.rows?.filter(
    (r) => r?.isChecked,
  );
  let streamIdString = undefined;
  if (streamList?.length > 0) {
    streamIdString = `search=${streamList
      .map((r) => r?.value)
      }`;
  }

  const collageList = topCollages?.college_type?.filter((r) => r?.isChecked);
  let collageIdString = undefined;
  if (collageList?.length > 0) {
    collageIdString = `collage_type__in=${collageList
      .map((r) => r?.name)
      .join(",")}`;
  }


  if (streamIdString && !collageIdString && !stateIdString && !cityIdString) {
    return `${url}?${streamIdString}`;
  }
  if (!streamIdString && !collageIdString && !stateIdString && cityIdString) {
    return `${url}?${cityIdString}`;
  }
  if (!streamIdString && !collageIdString && stateIdString && !cityIdString) {
    return `${url}?${stateIdString}`;
  }
  if (!streamIdString && collageIdString && !stateIdString && !cityIdString) {
    return `${url}?${collageIdString}`;
  }


  if (streamIdString && collageIdString && !stateIdString && !cityIdString) {
    return `${url}?${streamIdString}&${collageIdString}`;
  }
  if (!streamIdString && !collageIdString && stateIdString && cityIdString) {
    return `${url}?${stateIdString}&${cityIdString}`;
  }
  if (streamIdString && !collageIdString && stateIdString && !cityIdString) {
    return `${url}?${streamIdString}&${stateIdString}`;
  }
  if (!streamIdString && collageIdString && !stateIdString && cityIdString) {
    return `${url}?${collageIdString}&${cityIdString}`;
  }
  if (streamIdString && !collageIdString && !stateIdString && cityIdString) {
    return `${url}?${streamIdString}&${cityIdString}`;
  }
  if (!streamIdString && collageIdString && stateIdString && !cityIdString) {
    return `${url}?${collageIdString}&${stateIdString}`;
  }



  if (streamIdString && collageIdString && stateIdString && !cityIdString) {
    return `${url}?${streamIdString}&${collageIdString}&${stateIdString}`;
  }
  if (streamIdString && collageIdString && !stateIdString && cityIdString) {
    return `${url}?${streamIdString}&${collageIdString}&${cityIdString}`;
  }
  if (streamIdString && !collageIdString && stateIdString && cityIdString) {
    return `${url}?${streamIdString}&${stateIdString}&${cityIdString}`;
  }
  if (!streamIdString && collageIdString && stateIdString && cityIdString) {
    return `${url}?${collageIdString}&${stateIdString}&${cityIdString}`;
  }
  if (streamIdString && collageIdString && stateIdString && cityIdString) {
    return `${url}?${streamIdString}&${collageIdString}&${stateIdString}&${cityIdString}`;
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

        console.log("filter", filter)

        const res = await httpServices.get(
          filter === true ? handleTopCollagesFilter(topCollages, courseSector)
            : filter ? url + filter : url,
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

        updatedResponse.city_list = updatedResponse?.city_list?.map(
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

        updatedResponse.college_type = updatedResponse?.college_type?.map(
          (obj, idx) => ({
            id: idx,
            name: obj,
            isChecked: false,
          }),
        );

        const { state_list } = updatedResponse;
        if (state_list?.length > 0) {

          updatedPayload.state_list = state_list.map((r) => {
            r.isChecked = false;
            const foundStateList = topCollages?.state_list?.filter(
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

        const { city_list } = updatedResponse;
        if (city_list?.length > 0) {

          updatedPayload.city_list = city_list.map((r) => {
            r.isChecked = false;
            const foundCityList = topCollages?.city_list?.filter(
              (r) => r.isChecked,
            );
            if (foundCityList?.length > 0) {
              foundCityList.forEach((f) => {
                if (f.name === r.name) {
                  r.isChecked = true;
                }
              });
            }
            return r;
          });
        }

        const { college_type } = updatedResponse;
        if (college_type?.length > 0) {

          updatedPayload.college_type = college_type.map((r) => {
            r.isChecked = false;
            const foundCollegeList = topCollages?.college_type?.filter(
              (r) => r.isChecked,
            );
            if (foundCollegeList?.length > 0) {
              foundCollegeList.forEach((f) => {
                if (f.name === r.name) {
                  r.isChecked = true;
                }
              });
            }
            return r;
          });
        }


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
    const res = await httpServices.get("career/top-collage" + "/" + id);
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

export const singleCareer1Details = (id) => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.TOP_SCHOOL_REQUEST });
    const res = await httpServices.get("career/top-school" + "/" + id);
    dispatch({
      type: coursesTypes.TOP_SCHOOL_FINISH,
      payload: {
        ...res?.data,
        image: res?.data.image ? res?.data?.image : httpServices.noImage,
      },
    });
  } catch (error) {
    dispatch({ type: coursesTypes.TOP_SCHOOL_FAIL });
  }
};

export const singleCareer2Details = (id) => async (dispatch) => {
  try {
    dispatch({ type: coursesTypes.TOP_SCHOOL_REQUEST });
    const res = await httpServices.get("career/government-exam" + "/" + id);

    dispatch({
      type: coursesTypes.GOVERNMENT_EXAM_FINISH,
      payload: {
        ...res?.data,
        image: res?.data.image ? res?.data?.image : httpServices.noImage,
      },
    });
  } catch (error) {
    dispatch({ type: coursesTypes.GOVERNMENT_EXAM_FAIL });
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
    }
    //  else if (arrayType === "courseSector") {
    //   const updatedPayload = courseSector;
    //   const idx = updatedPayload?.rows?.findIndex((u) => u.id === id);
    //   if (idx !== -1) {
    //     updatedPayload.rows[idx].isChecked = action;
    //   }
    //   dispatch({
    //     type: coursesTypes.GOVERNMENT_EXAM_FILTER_SET,
    //     payload: {
    //       data: updatedPayload,
    //       type: "courseSector",
    //     },
    //   });
    //   await dispatch(getTopCollages(true));
    // } 

    else if (arrayType === "topSchools") {
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
      if (subType === "cities") {
        const updatedPayload = topSchools;

        const idx = updatedPayload?.city_list?.findIndex((u) => u.id === id);
        if (idx !== -1) {
          updatedPayload.city_list.filter((item, index) => {
            return item.id !== id
              ? (updatedPayload.city_list[index].isChecked = false)
              : null;
          });
          updatedPayload.city_list[idx].isChecked = action;
        }
        dispatch({
          type: coursesTypes.TOP_SCHOOL_FINISH,
          payload: updatedPayload,
        });
        await dispatch(getTopSchools(true));
      }
      if (subType === "ownership") {
        const updatedPayload = topSchools;
        const idx = updatedPayload?.school_type?.findIndex((u) => u.id === id);
        if (idx !== -1) {
          updatedPayload.school_type[idx].isChecked = action;
        }
        dispatch({
          type: coursesTypes.GOVERNMENT_EXAM_FILTER_SET,
          payload: {
            data: updatedPayload,
            // type: "courseSector",
            type: "topSchools",
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
      if (subType === "category") {
        const updatedPayload = topSchools;

        const idx = updatedPayload?.gender_intech?.findIndex((u) => u.id === id);
        if (idx !== -1) {
          updatedPayload.gender_intech.filter((item, index) => {
            return item.id !== id
              ? (updatedPayload.gender_intech[index].isChecked = false)
              : null;
          });
          updatedPayload.gender_intech[idx].isChecked = action;
        }
        dispatch({
          type: coursesTypes.TOP_SCHOOL_FINISH,
          payload: updatedPayload,
        });
        await dispatch(getTopSchools(true));
      }
    } else {

      const updatedPayload = topCollages;
      if (subType === "state") {
        const updatedPayload = topCollages;
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
          type: coursesTypes.TOP_COLLAGE_FINISH,
          payload: updatedPayload,
        });
        await dispatch(getTopCollages(true));
      }
      if (subType === "city") {
        const updatedPayload = topCollages;
        const idx = updatedPayload?.city_list?.findIndex((u) => u.id === id);
        if (idx !== -1) {
          updatedPayload.city_list.filter((item, index) => {
            return item.id !== id
              ? (updatedPayload.city_list[index].isChecked = false)
              : null;
          });
          updatedPayload.city_list[idx].isChecked = action;
        }
        dispatch({
          type: coursesTypes.TOP_COLLAGE_FINISH,
          payload: updatedPayload,
        });
        await dispatch(getTopCollages(true));
      }
      if (subType === "ownership") {
        const updatedPayload = topCollages;
        const idx = updatedPayload?.college_type?.findIndex((u) => u.id === id);
        if (idx !== -1) {
          updatedPayload.college_type[idx].isChecked = action;
        }
        dispatch({
          type: coursesTypes.GOVERNMENT_EXAM_FILTER_SET,
          payload: {
            data: updatedPayload,
            type: "topCollages",
          },
        });
        await dispatch(getTopCollages(true));
      }
      // if (subType === "stream") {
      //   const updatedPayload = courseSector;
      //   const idx = updatedPayload?.rows?.findIndex((u) => u.id === id);
      //   if (idx !== -1) {
      //     updatedPayload.rows.filter((item, index) => {
      //       return item.id !== id
      //         ? (updatedPayload.rows[index].isChecked = false)
      //         : null;
      //     });
      //     updatedPayload.rows[idx].isChecked = action;
      //   }
      //   dispatch({
      //     type: coursesTypes.GOVERNMENT_EXAM_FILTER_SET,
      //     payload: {
      //       data: updatedPayload,
      //       type: "stream",
      //     },
      //   });
      //   await dispatch(getTopCollages(true));
      // }
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

export const allTopcollegeBySearch =
  (filter = null) =>
    async (dispatch) => {
      try {
        dispatch({ type: coursesTypes.TOP_COLLAGE_SEARCH_REQUEST });

        const res = await httpServices.get(
          `${constants.TOP_COLLEGE_LIST + filter}`
        );

        console.log("res", res)

        dispatch({
          type: coursesTypes.TOP_COLLAGE_SEARCH_FINISH,
          payload: {
            ...res,
            results: res?.results
              ? res?.results?.map((c) => ({
                ...c,
                image: c.image ? c?.image : httpServices.noImage,
              }))
              : [],
          },
        });
      } catch (error) {
        dispatch({ type: coursesTypes.TOP_COLLAGE_SEARCH_FAIL });
      }
    };

