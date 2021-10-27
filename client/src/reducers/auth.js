import {
  REGISTER_SUCCESS,
  //REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  //LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
  UPDATE_USER,
  USER_ERROR,
  AUTH_GET_CODE,
  AUTH_CONFIRM_CODE
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  authConfirmCode: false,
  dataFormForResetPassword: {},
  loading: true,
  user: null
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case UPDATE_USER:
      return {
        ...state,
        user: payload,
        loading: false
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        dataFormForResetPassword: null,
        loading: false
      };
    case AUTH_GET_CODE:
      return {
        ...state,
        authConfirmCode: true,
        dataFormForResetPassword: payload,
        loading: false
      };
    case AUTH_CONFIRM_CODE:
      return {
        ...state,
        authConfirmCode: false,
        dataFormForResetPassword: payload,
        loading: false
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        user: null
      };
    case ACCOUNT_DELETED:
    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    default:
      return state;
  }
}

export default authReducer;
