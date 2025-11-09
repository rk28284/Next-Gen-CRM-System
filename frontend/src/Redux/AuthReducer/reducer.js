import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes";

const intialstate = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};

export const reducer = (state = intialstate, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case REGISTER_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case REGISTER_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case REGISTER_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
