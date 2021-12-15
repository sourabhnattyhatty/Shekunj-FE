import { coursesTypes } from "./types";

const initialState = {
  isLoading: false,
  courses: [],
  course: {},
  tests: [],
  courseModulesList: [],
  error: null,
  moduleprogress: 0,
  similarCourses: []
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
        moduleprogress : action.progress
      };
      
    case coursesTypes.COURSE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

      case coursesTypes.ACCORDIAN_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case coursesTypes.ACCORDIAN_LIST_FINISH:
      return {
        ...state,
        isLoading: false,
        courseModulesList: action.payload,
        error: null,
      };
      
    case coursesTypes.ACCORDIAN_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case coursesTypes.SIMILAR_COURSES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case coursesTypes.SIMILAR_COURSES_FINISH:
      debugger
      return {
        ...state,
        isLoading: false,
        similarCourses: action.payload,
        error: null,
      };
      
    case coursesTypes.SIMILAR_COURSES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
