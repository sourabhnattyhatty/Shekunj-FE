import { guidanceTypes } from "./types";
import httpServices from "../../utils/ApiServices";
import { toast } from "react-toastify";
import { toasterConfig } from "../../utils";

export const bookCounseller = (value) => async (dispatch) => {
    try{
        dispatch({type:guidanceTypes.BOOK_SESSION_REQUEST})
        const res = await httpServices.post('/course/book-session/',value);
        debugger
    }
    catch(error){
        debugger
    }
}