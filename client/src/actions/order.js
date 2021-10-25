import api from "../utils/api";
import { setAlert } from "./alert";

import { GET_ORDER, GET_ORDERS, ORDER_ERROR } from "./types";

export const getOrders = () => async (dispatch) => {
  try {
    const res = await api.get("/order");

    console.log(res.data);

    dispatch({
      type: GET_ORDERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const newOrder = (formData, history) => async (dispatch) => {
  try {
    const res = await api.post(`/order/new-order/${formData.seller}`, formData);

    dispatch({
      type: GET_ORDER,
      payload: res.data
    });

    dispatch(setAlert("New order created!", "success"));

    history.push("/dashboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: ORDER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
