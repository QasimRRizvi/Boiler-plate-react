import { removeStorageItem } from "utilities/storage";
import ToastStatusEnum from "constants/ToastStatusEnum";
import * as ToastAction from "stores/toasts/ToastAction";
import * as IAuth from "./models/IAuth";
import * as AuthMiddleware from "./AuthMiddleware";
import * as AUTH_CONSTANTS from "./constants";
import { URLS } from "./AuthUrls";

export const login = (credentials: IAuth.ILoginCredentials) => {
  return (dispatch: Function) => {
    dispatch({ type: AUTH_CONSTANTS.CALL_AUTH });
    AuthMiddleware.login(URLS.login(), credentials)
      .then((res) => {
        dispatch(
          ToastAction.addToast({
            id: "1",
            type: ToastStatusEnum.Success,
            message: "Login Successfully",
          })
        );
        dispatch({ type: AUTH_CONSTANTS.SUCCESS_AUTH, payload: res?.response });
      })
      .catch((e) => {
        dispatch({ type: AUTH_CONSTANTS.FINISH_CALL_AUTH });
      });
  };
};
export const logout = () => {
  return (dispatch: Function) => {
    removeStorageItem("isAuthenticated");
    removeStorageItem("userEmail");
    dispatch({ type: AUTH_CONSTANTS.LOGOUT });
  };
};
