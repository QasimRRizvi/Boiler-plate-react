import { combineReducers } from "redux";
import authReducer from "./auth/AuthReducer";
import toastReducer from "./toasts/ToastReducer";

const RootReducer = combineReducers({
  authReducer,
  toastReducer,
});

export { RootReducer };
