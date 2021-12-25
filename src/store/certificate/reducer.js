import { certificateTypes } from ".";

const initialState = {
  isLoading: false,
  error: null,
  certificates: [],
  certificateDetail: null,
};

export const certificateReducer = (state = initialState, action) => {
  switch (action.type) {
    case certificateTypes.FETCH_CERTIFICATES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case certificateTypes.FETCH_CERTIFICATES_FINISH:
      return {
        ...state,
        isLoading: false,
        certificate: null,
        certificates: action.payload,
        error: null,
      };
    case certificateTypes.FETCH_CERTIFICATES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case certificateTypes.FETCH_CERTIFICATE_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case certificateTypes.FETCH_CERTIFICATE_DETAIL_FINISH:
      return {
        ...state,
        isLoading: false,
        certificateDetail: action.payload,
        error: null,
      };
    case certificateTypes.FETCH_CERTIFICATE_DETAIL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
