import { faqTypes } from ".";

const initialState = {
  isLoading: false,
  error: null,
  faq: [],
  lan:true
};

export const faqReducer = (state = initialState, action) => {
   
  switch (action.type) {
    case faqTypes.FETCH_FAQ_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case faqTypes.FETCH_FAQ_FINISH:
      return {
        ...state,
        isLoading: false,
        faq: action.payload,
        error: null,
      };
    
    case faqTypes.FETCH_FAQ_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
