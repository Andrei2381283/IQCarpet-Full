import { NEW_ORDER, NEW_ORDER_ERROR } from "../actions/types";

const initialState = {
  order: null,
  orders: [],
  loading: true,
  error: {},
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case NEW_ORDER:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case NEW_ORDER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default profileReducer;
