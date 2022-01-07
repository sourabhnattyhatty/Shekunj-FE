import { coursesTypes } from ".";

const initialCourseSector = {
  name: "OWNERSHIP",
  rows: [
    {
      id: 1,
      name: "Private",
      isChecked: false,
      value: "private",
    },
    {
      id: 2,
      name: "Government",
      isChecked: false,
      value: "government",
    },
  ],
};

const initialState = {
  isLoading: false,
  governmentExams: [],
  topCollages: [],
  topSchools: [],
  error: null,
  courseSector: initialCourseSector,
  lan : true
};

export const careerReducer = (state = initialState, action) => {
  switch (action.type) {
    case coursesTypes.GOVERNMENT_EXAM_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case coursesTypes.GOVERNMENT_EXAM_FINISH:
      return {
        ...state,
        isLoading: false,
        governmentExams: action.payload,
        error: null,
      };
    case coursesTypes.GOVERNMENT_EXAM_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case coursesTypes.TOP_COLLAGE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case coursesTypes.TOP_COLLAGE_FINISH:
      return {
        ...state,
        isLoading: false,
        topCollages: action.payload,
        error: null,
      };
    case coursesTypes.TOP_COLLAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case coursesTypes.TOP_SCHOOL_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case coursesTypes.TOP_SCHOOL_FINISH:
      return {
        ...state,
        isLoading: false,
        topSchools: action.payload,
        error: null,
      };
    case coursesTypes.TOP_SCHOOL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case coursesTypes.GOVERNMENT_EXAM_FILTER_SET:
      const { data, type } = action.payload;
      if (type === "courseSector") {
        return {
          ...state,
          isLoading: false,
          courseSector: data,
        };
      }
      return {
        ...state,
        isLoading: false,
        governmentExams: data,
      };
    case coursesTypes.GOVERNMENT_EXAM_FILTER_RESET:
      return {
        ...state,
        isLoading: false,
        topCollages: {
          ...state.topCollages?.collage_stream_list,
          collage_stream_list: state.topCollages?.collage_stream_list?.map(
            (r) =>
              ({
                ...r,
                isChecked: false,
              } || []),
          ),
        },
        governmentExams: {
          ...state.governmentExams,
          govt_category:
            state.governmentExams?.govt_category?.map((r) => ({
              ...r,
              isChecked: false,
            })) || [],
        },
        topSchools: {
          ...state.governmentExams,
          board_list:
            state.topSchools?.govt_list?.map((r) => ({
              ...r,
              isChecked: false,
            })) || [],
          state_list:
            state.topSchools?.state_list?.map((r) => ({
              ...r,
              isChecked: false,
            })) || [],
        },
        courseSector: {
          ...initialCourseSector,
          rows: initialCourseSector.rows.map((r) => ({
            ...r,
            isChecked: false,
          })),
        },
      };
    default:
      return state;
  }
};
