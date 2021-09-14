import { pageContants } from "./constants";
import axios from "../helpers/axios";
export const createPage = (form) => {
    return async dispatch => {
        dispatch({ type: pageContants.CREATE_PAGE_REQUEST });
        try {
            const res = await axios.post('page/create', form);
            if (res.status === 201) {
                dispatch({
                    type: pageContants.CREATE_PAGE_SUCCESS,
                    payload: { page: res.data.page }
                });
            }
            else {
                dispatch({
                    type: pageContants.CREATE_PAGE_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}