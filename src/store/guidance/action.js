import { guidanceTypes } from "./types";
import httpServices from "../../utils/ApiServices";
import { toast } from "react-toastify";
import { toasterConfig } from "../../utils";

export const bookCounseller = (value) => async (dispatch) => {
  try {
    dispatch({ type: guidanceTypes.BOOK_SESSION_REQUEST });
    const res = await httpServices.post("/course/book-session/", value);
    dispatch({ type: guidanceTypes.BOOK_SESSION_FINISH });
    toast.success(res.message, toasterConfig);
  } catch (error) {
    dispatch({ type: guidanceTypes.BOOK_SESSION_FAIL });
    if (error.data.errors.date_of_birth) {
      toast.error("Date of Birth is required.", toasterConfig);
    } else if (error.data.errors.gender) {
      toast.error("Gender is required.", toasterConfig);
    } else if (error.data.errors.qualifications) {
      toast.error("Qualification is required.", toasterConfig);
    } else if (error.data.errors.course_looking_for) {
      toast.error("Course looking for is required.", toasterConfig);
    }
  }
};
