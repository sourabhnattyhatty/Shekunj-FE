import { authTypes } from "./types";

const initialState = {
  isLoading: false,
  verifyLoading: false,
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
    case authTypes.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case authTypes.SIGNUP_FINISH:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        isAuth: false,
        error: null,
      };
    case authTypes.SIGNUP_FAIL:
      return {
        ...state,
        isLoading: false,
        user: {},
        isAuth: false,
        error: action.payload,
      };
    case authTypes.CONTACT_VERIFY_REQUEST:
      return {
        ...state,
        verifyLoading: true,
        error: null,
      };
    case authTypes.CONTACT_VERIFY_FINISH:
      return {
        ...state,
        verifyLoading: false,
        error: null,
      };
    case authTypes.CONTACT_VERIFY_FAIL:
      return {
        ...state,
        verifyLoading: false,
        user: {},
        isAuth: false,
        error: action.payload,
      };
    case authTypes.REFRESH:
      return {
        ...state,
        isAuth: true,
      };
    default:
      return state;
  }
};
