import ToastStatusEnum from "constants/ToastStatusEnum";

export interface IToast {
  readonly type: ToastStatusEnum;
  readonly message: string;
  readonly id: string;
}
