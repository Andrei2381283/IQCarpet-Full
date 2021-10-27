import api from "../utils/api";
import { setAlert } from "./alert";

import { GET_CARPET, GET_CARPETS, CARPET_ERROR } from "./types";

export const getMyCarpets = () => async (dispatch) => {
  try {
    const res = await api.get("/carpets");

    console.log(res.data);

    dispatch({
      type: GET_CARPETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CARPET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const createCarpet = (formData) => async (dispatch) => {
  try {
    const res = await api.post("/carpets/create", formData);

    dispatch({
      type: GET_CARPET,
      payload: res.data
    });

    dispatch(setAlert("New carpet created!", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: CARPET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
