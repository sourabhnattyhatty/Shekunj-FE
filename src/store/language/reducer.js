import { languageTypes } from ".";

const initialState = {
  lan : true
}

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case languageTypes.LANGUAGE:
        return {
          ...state,
          lan : !state.lan
        }
    default:
      return state;
  }
};
