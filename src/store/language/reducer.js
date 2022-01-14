import { languageTypes } from ".";

const currentLang = localStorage.getItem("i18nextLng");
const lang = currentLang ? currentLang?.split("-")[0] : "en";

const initialState = {
  lan: lang || "en",
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case languageTypes.LANGUAGE:
      return {
        ...state,
        lan: action.payload,
      };
    default:
      return state;
  }
};
