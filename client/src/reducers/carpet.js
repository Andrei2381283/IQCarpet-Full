import { GET_CARPET, GET_CARPETS, CARPET_ERROR } from "../actions/types";

const initialState = {
  carpet: null,
  carpets: [],
  loading: true,
  error: {}
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CARPET:
      return {
        ...state,
        carpet: payload,
        loading: false
      };
    case GET_CARPETS:
      return {
        ...state,
        carpets: payload,
        loading: false
      };
    case CARPET_ERROR:
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
