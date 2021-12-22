import { guidanceTypes } from ".";

const initialState = {
  isLoading: false,
  error: null,
};

export const guidanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case guidanceTypes.BOOK_SESSION_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case guidanceTypes.BOOK_SESSION_FINISH:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case guidanceTypes.BOOK_SESSION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
