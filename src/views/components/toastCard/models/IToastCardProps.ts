import * as IToasts from "stores/toasts/models/IToast";

export interface IToastCardProps {
  readonly item: IToasts.IToast;
  readonly removeById: () => void;
}
