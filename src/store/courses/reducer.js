import { coursesTypes } from "./types";

const initialState = {
  isLoading: false,
  courses: [],
  course: {},
  tests: [],
  error: null,
};

export const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case coursesTypes.COURSES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case coursesTypes.COURSES_FINISH:
      return {
        ...state,
        isLoading: false,
        courses: action.payload,
        tests : action.payload2,
        error: null,
      };
    case coursesTypes.COURSES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

      case coursesTypes.TESTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case coursesTypes.TESTS_FINISH:
      return {
        ...state,
        isLoading: false,
        tests: action.payload,
        error: null,
      };
    case coursesTypes.TESTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case coursesTypes.COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case coursesTypes.COURSE_FINISH:
      return {
        ...state,
        isLoading: false,
        course: action.payload,
        error: null,
      };
      
    case coursesTypes.COURSE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
