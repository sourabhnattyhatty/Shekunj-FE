import { eventsTypes } from ".";

const initialState = {
  isLoading: false,
  error: null,
  events: {},
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case eventsTypes.FETCH_EVENTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case eventsTypes.FETCH_EVENTS_FINISH:
      return {
        ...state,
        isLoading: false,
        events: action.payload,
        error: null,
      };
    case eventsTypes.FETCH_EVENTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
