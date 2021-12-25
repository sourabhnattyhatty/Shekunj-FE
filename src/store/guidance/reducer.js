import { guidanceTypes } from ".";

const initialCourseSector = {
  name: "COURSE SECTOR",
  rows: [
    {
      id: 1,
      name: "Private",
      isChecked: false,
    },
    {
      id: 2,
      name: "Government", // Government
      isChecked: false,
    },
  ],
};

const initialState = {
  isLoading: false,
  error: null,
  guidanceCategory: {
    public: [],
    private: [],
  },
  guidanceCategoryDetail: null,
  selectedFilter: [],
  testData: [],
  countData: [],
  courseSector: initialCourseSector,
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
    case guidanceTypes.FETCH_GUIDANCE_START_USER_CAREER_TEST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case guidanceTypes.FETCH_GUIDANCE_START_USER_CAREER_TEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        testData: action.payload,
        error: null,
      };
    case guidanceTypes.FETCH_GUIDANCE_START_USER_CAREER_TEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case guidanceTypes.GUIDANCE_USER_CAREER_TEST_COUNT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case guidanceTypes.GUIDANCE_USER_CAREER_TEST_COUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countData: action.payload,
        error: null,
      };
    case guidanceTypes.GUIDANCE_USER_CAREER_TEST_COUNT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
