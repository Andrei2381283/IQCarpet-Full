import api from "../utils/api";
import { setAlert } from "./alert";

import { NEW_ORDER, NEW_ORDER_ERROR } from "./types";

export const newOrder = (formData, history) => async (dispatch) => {
  try {
    const res = await api.post(`/order/new-order/${formData.seller}`, formData);

    dispatch({
      type: NEW_ORDER,
      payload: res.data,
    });

    dispatch(setAlert("New order created!", "success"));

    // history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: NEW_ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
