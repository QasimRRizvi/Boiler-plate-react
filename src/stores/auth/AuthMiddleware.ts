import { setStorageItem } from "utilities/storage";
import * as IAuth from "./models/IAuth";

export const login = async (_url: string, credentials: IAuth.ILoginCredentials) => {
  try {
    if (credentials.email && credentials.password) {
      setStorageItem("isAuthenticated", true);
      setStorageItem("userEmail", credentials.email);
      return {
        response: { isAuthenticated: true, email: credentials.email },
      };
    }
    // const res = await sendAxiosReq.post(url, {
    //   email: credentials?.email,
    //   password: credentials?.password,
    // });
    // if (res?.status === "success") {
    //   return res;
    // }
    // throw res;
  } catch (error) {
    throw error;
  }
};
