import * as IAuth from "stores/auth/models/IAuth";
import * as IToasts from "stores/toasts/models/IToast";

export interface ILoginProps {
  readonly isLoading?: boolean;
  login: (credentials: IAuth.ILoginCredentials) => void;
  addToast: (data: IToasts.IToast) => void;
}

export interface ILoginInput {
  email: string;
  password: string;
  showPassword: boolean;
  emailError: boolean;
}
