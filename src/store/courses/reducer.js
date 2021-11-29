import {coursesTypes} from './types'

const initialState = {
  isLoading: false,
  courses : [],
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
        courses : action.payload,
        error: null,
      };
    case coursesTypes.COURSES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
