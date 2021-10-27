import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import post from "./post";
import order from "./order";
import carpet from "./carpet";

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  order,
  carpet
});
