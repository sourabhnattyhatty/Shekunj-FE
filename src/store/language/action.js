import { languageTypes } from ".";

export const translation = () => async (dispatch) => {
  dispatch({ type: languageTypes.LANGUAGE });
};
