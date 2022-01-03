import { languageTypes } from "./types";

const languageChange = state => {
    return {
      type: languageTypes.LANGUAGE_CHANGE,
      payload: state,
    };
  };
  
  export {languageChange};