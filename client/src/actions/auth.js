import api from "../utils/api";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  UPDATE_USER,
  USER_ERROR,
  AUTH_GET_CODE,
  AUTH_CONFIRM_CODE
} from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const editUserProfile = (formData) => async (dispatch) => {
  try {
    const res = await api.put("/auth/settings", formData);

    dispatch({
      type: UPDATE_USER,
      payload: res.data
    });

    dispatch(setAlert("User Profile Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const editUserProfileAndUploadAvatar = (data) => async (dispatch) => {
  try {
    const res = await api.post("/auth/settings/upload-avatar", data);

    dispatch({
      type: UPDATE_USER,
      payload: res.data
    });

    dispatch(setAlert("User Profile Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/users", formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post("/auth", body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Reset Password Send Code
export const resetPasswordSendCode = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/auth/reset-password-send-code", formData);

    dispatch({
      type: AUTH_GET_CODE,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Reset Password Confirm Code
export const resetPasswordConfirmCode =
  (formData, history) => async (dispatch) => {
    try {
      const res = await api.post("/auth/reset-password-confirm-code", formData);

      dispatch({
        type: AUTH_CONFIRM_CODE,
        payload: res.data
      });

      history.push("/new_password");
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: AUTH_ERROR
      });
    }
  };

// Reset Password Confirm Code
export const resetPassword = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/auth/reset-password", formData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
