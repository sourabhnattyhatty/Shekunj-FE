import { authTypes } from "./types";

const initialState = {
  isLoading: false,
  user: {},
  isAuth: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case authTypes.LOGIN_FINISH:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuth: true,
        error: null,
      };
    case authTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        user: {},
        isAuth: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
