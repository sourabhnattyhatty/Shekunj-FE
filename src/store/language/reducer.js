import { languageTypes } from "./types";

export const languageReducer = (state = false, action) => {
  switch (action.type) {
    case languageTypes.LANGUAGE_CHANGE: {
      return !state;
    }
    default:
      return state;
  }
};
