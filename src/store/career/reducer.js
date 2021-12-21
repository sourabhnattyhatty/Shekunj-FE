import { coursesTypes } from ".";

const initialState = {
  isLoading: false,
  governmentExams: [],
  topCollages: [],
  topSchools: [],
  error: null,
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
    default:
      return state;
  }
};
