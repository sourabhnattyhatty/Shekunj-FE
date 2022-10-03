import { notificationsTypes } from ".";

const initialState = {
  isLoading: false,
  error: null,
  notifications: {},
};

export const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case notificationsTypes.FETCH_NOTIFICATIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case notificationsTypes.FETCH_NOTIFICATIONS_FINISH:
      return {
        ...state,
        isLoading: false,
        notifications: action.payload,
        error: null,
      };
    case notificationsTypes.FETCH_NOTIFICATIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
