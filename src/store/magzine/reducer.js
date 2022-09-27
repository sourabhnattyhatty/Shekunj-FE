import { magzinesTypes } from ".";

const initialState = {
  isLoading: false,
  error: null,
  magzines: [],
};

export const magzinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case magzinesTypes.FETCH_MAGZINES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case magzinesTypes.FETCH_MAGZINES_FINISH:
      return {
        ...state,
        isLoading: false,
        magzines: action.payload,
        error: null,
      };
    case magzinesTypes.FETCH_MAGZINES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
