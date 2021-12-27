import { myProgressTypes } from ".";

const initialState = {
  isLoading: false,
  error: null,
  myProgress: null,
};

export const myProgressReducer = (state = initialState, action) => {
  switch (action.type) {
    case myProgressTypes.FETCH_MY_PROGRESS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case myProgressTypes.FETCH_MY_PROGRESS_FINISH:
      return {
        ...state,
        isLoading: false,
        myProgress: action.payload,
        error: null,
      };
    case myProgressTypes.FETCH_MY_PROGRESS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
