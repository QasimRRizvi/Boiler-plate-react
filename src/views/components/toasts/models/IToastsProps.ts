import * as IToasts from "stores/toasts/models/IToast";

export interface IToastsProps {
  toasts: IToasts.IToast[];
  removeToast: () => void;
}
