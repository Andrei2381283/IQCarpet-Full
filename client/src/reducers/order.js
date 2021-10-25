import { GET_ORDER, GET_ORDERS, ORDER_ERROR } from "../actions/types";

const initialState = {
  order: null,
  orders: [],
  loading: true,
  error: {}
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ORDER:
      return {
        ...state,
        order: payload,
        loading: false
      };
    case GET_ORDERS:
      return {
        ...state,
        orders: payload,
        loading: false
      };
    case ORDER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default profileReducer;
