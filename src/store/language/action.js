import { languageTypes } from ".";

export const translation = (lang) => async (dispatch) => {
  dispatch({ type: languageTypes.LANGUAGE, payload: lang });
};
