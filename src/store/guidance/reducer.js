import { guidanceTypes } from ".";

const initialState = {
  isLoading: false,
  error: null,
  guidanceCategory: {
    public: [],
    private: [],
  },
  guidanceCategoryDetail: null,
  selectedFilter: [],
};

export const guidanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case guidanceTypes.BOOK_SESSION_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case guidanceTypes.BOOK_SESSION_FINISH:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case guidanceTypes.BOOK_SESSION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case guidanceTypes.GUIDANCE_FILTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case guidanceTypes.GUIDANCE_FILTER_FINISH:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case guidanceTypes.GUIDANCE_FILTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case guidanceTypes.GUIDANCE_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case guidanceTypes.GUIDANCE_CATEGORY_FINISH:
      return {
        ...state,
        isLoading: false,
        guidanceCategory: {
          ...state.guidanceCategory,
          public: action.payload,
        },
        error: null,
      };
    case guidanceTypes.GUIDANCE_CATEGORY_FINISH_PRIVATE:
      return {
        ...state,
        isLoading: false,
        guidanceCategory: {
          ...state.guidanceCategory,
          private: action.payload,
        },
        error: null,
      };
    case guidanceTypes.GUIDANCE_CATEGORY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case guidanceTypes.GUIDANCE_CATEGORY_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case guidanceTypes.GUIDANCE_CATEGORY_DETAIL_FINISH:
      return {
        ...state,
        isLoading: false,
        guidanceCategoryDetail: action.payload,
        error: null,
      };
    case guidanceTypes.GUIDANCE_CATEGORY_DETAIL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case guidanceTypes.GUIDANCE_CATEGORY_DETAIL_RESET:
      return {
        ...state,
        isLoading: false,
        guidanceCategoryDetail: null,
      };
    default:
      return state;
  }
};
