import { languageTypes } from ".";

const languageChange = state => {
    return {
      type: languageTypes.LANGUAGE_CHANGE,
      payload: state,
    };
  };
  
  export {languageChange};