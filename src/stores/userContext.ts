import { createContext } from "react";
import { IUserInfo } from "../interfaces";

interface IUserContext {
  userInfo?: IUserInfo;
  setUserInfo?: (userInfo: IUserInfo) => void;
}

const userContext = createContext<IUserContext>({});

const UserProvider = userContext.Provider;

export { userContext, UserProvider };
