import { coursesTypes } from ".";

const initialCourseSector = {
  name: "Stream",
  rows: [
    {
      id: 1,
      name: "Engineering",
      isChecked: false,
      value: "Engineering",
    },
    {
      id: 2,
      name: "Management",
      isChecked: false,
      value: "Management",
    },
    {
      id: 3,
      name: "Law",
      isChecked: false,
      value: "Law",
    },
    {
      id: 4,
      name: "Pharmacy",
      isChecked: false,
      value: "Pharmacy",
    },
    {
      id: 5,
      name: "Computer Application",
      isChecked: false,
      value: "Computer Application",
    },
    {
      id: 6,
      name: "Physics",
      isChecked: false,
      value: "Physics",
    },
    {
      id: 7,
      name: "Commerce",
      isChecked: false,
      value: "Commerce",
    },
    {
      id: 8,
      name: "Arts",
      isChecked: false,
      value: "Arts",
    },
    {
      id: 9,
      name: "Science",
      isChecked: false,
      value: "Science",
    },
    {
      id: 10,
      name: "Hotel Management",
      isChecked: false,
      value: "Hotel Management",
    },
    {
      id: 11,
      name: "Architecture",
      isChecked: false,
      value: "Architecture",
    },
    {
      id: 12,
      name: "Diploma",
      isChecked: false,
      value: "Diploma",
    },
    {
      id: 13,
      name: "Fashion",
      isChecked: false,
      value: "Fashion",
    },
    {
      id: 14,
      name: "Nursing",
      isChecked: false,
      value: "Nursing",
    },
    {
      id: 15,
      name: "Education",
      isChecked: false,
      value: "Education",
    },
    {
      id: 16,
      name: "Environmental Studies",
      isChecked: false,
      value: "Environmental Studies",
    },
    {
      id: 17,
      name: "Instrumentation",
      isChecked: false,
      value: "Instrumentation",
    },
    {
      id: 18,
      name: "Social work",
      isChecked: false,
      value: "Social work",
    },
    {
      id: 19,
      name: "Journolism",
      isChecked: false,
      value: "Journolism",
    },
    {
      id: 20,
      name: "Polytechnic",
      isChecked: false,
      value: "Polytechnic",
    },
    {
      id: 21,
      name: "Paramedical",
      isChecked: false,
      value: "Paramedical",
    },
    {
      id: 22,
      name: "Dental",
      isChecked: false,
      value: "Dental",
    },
    {
      id: 23,
      name: "Library Science",
      isChecked: false,
      value: "Library Science",
    },
    {
      id: 24,
      name: "Agriculture",
      isChecked: false,
      value: "Agriculture",
    },
    {
      id: 25,
      name: "Ayurveda",
      isChecked: false,
      value: "Ayurveda",
    },
    {
      id: 26,
      name: "Forest Management",
      isChecked: false,
      value: "Forest Management",
    },
    {
      id: 27,
      name: "Data Science",
      isChecked: false,
      value: "Data Science",
    },
    {
      id: 28,
      name: "Professional Courses",
      isChecked: false,
      value: "Professional Courses",
    },
    {
      id: 29,
      name: "Academic Courses",
      isChecked: false,
      value: "Academic Courses",
    },
    {
      id: 30,
      name: "Nano Technology",
      isChecked: false,
      value: "Nano Technology",
    },
    {
      id: 31,
      name: "Pharmaceutical Chemistery",
      isChecked: false,
      value: "Pharmaceutical Chemistery",
    },
    {
      id: 32,
      name: "Energy Technology",
      isChecked: false,
      value: "Energy Technology",
    },
    {
      id: 33,
      name: "Biotechnology",
      isChecked: false,
      value: "Biotechnology",
    },
    {
      id: 34,
      name: "Information Technology",
      isChecked: false,
      value: "Information Technology",
    },
   
  ],
};

const initialState = {
  isLoading: false,
  governmentExams: [],
  topCollages: [],
  topSchools: [],
  error: null,
  courseSector: initialCourseSector,
  lan : true
};

export const careerReducer = (state = initialState, action) => {
  switch (action.type) {
    case coursesTypes.GOVERNMENT_EXAM_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case coursesTypes.GOVERNMENT_EXAM_FINISH:
      return {
        ...state,
        isLoading: false,
        governmentExams: action.payload,
        error: null,
      };
    case coursesTypes.GOVERNMENT_EXAM_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case coursesTypes.TOP_COLLAGE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case coursesTypes.TOP_COLLAGE_FINISH:
      return {
        ...state,
        isLoading: false,
        topCollages: action.payload,
        error: null,
      };
    case coursesTypes.TOP_COLLAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };


      case coursesTypes.TOP_COLLAGE_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case coursesTypes.TOP_COLLAGE_SEARCH_FINISH:
      return {
        ...state,
        isLoading: false,
        topCollages: action.payload,
        error: null,
      };
    case coursesTypes.TOP_COLLAGE_SEARCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case coursesTypes.TOP_SCHOOL_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case coursesTypes.TOP_SCHOOL_FINISH:
      return {
        ...state,
        isLoading: false,
        topSchools: action.payload,
        error: null,
      };
    case coursesTypes.TOP_SCHOOL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case coursesTypes.GOVERNMENT_EXAM_FILTER_SET:
      const { data, type } = action.payload;
      if (type === "courseSector") {
        return {
          ...state,
          isLoading: false,
          courseSector: data,
        };
      }
      return {
        ...state,
        isLoading: false,
        governmentExams: data,
      };
    case coursesTypes.GOVERNMENT_EXAM_FILTER_RESET:
      return {
        ...state,
        isLoading: false,
        topCollages: {
          ...state.topCollages?.collage_stream_list,
          collage_stream_list: state.topCollages?.collage_stream_list?.map(
            (r) =>
              ({
                ...r,
                isChecked: false,
              } || []),
          ),
        },
        governmentExams: {
          ...state.governmentExams,
          govt_category:
           Array.isArray(state.governmentExams?.govt_category) && state.governmentExams?.govt_category?.map((r) => ({
              ...r,
              isChecked: false,
            })) || [],
        },
        topSchools: {
          ...state.governmentExams,
          board_list:
            state.topSchools?.govt_list?.map((r) => ({
              ...r,
              isChecked: false,
            })) || [],
          state_list:
            state.topSchools?.state_list?.map((r) => ({
              ...r,
              isChecked: false,
            })) || [],
        },
        courseSector: {
          ...initialCourseSector,
          rows: initialCourseSector.rows.map((r) => ({
            ...r,
            isChecked: false,
          })),
        },
      };
    default:
      return state;
  }
};
