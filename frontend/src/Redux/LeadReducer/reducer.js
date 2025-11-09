import {
  DELETE_LEAD_SUCCESS,
  GET_LEAD_SUCCESS,
  LEAD_FAILURE,
  LEAD_REQUEST,
  PUT_LEAD_SUCCESS,
} from "./actionTypes";

const intialstate = {
  isLoading: false,
  isError: false,
  leads: [],
};
export const reducer = (state = intialstate, { type, payload }) => {
  switch (type) {
    case LEAD_REQUEST:
      return { ...state, isLoading: true };
    case GET_LEAD_SUCCESS:
      return { ...state, isLoading: false, leads: payload };
    case PUT_LEAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case DELETE_LEAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case LEAD_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
