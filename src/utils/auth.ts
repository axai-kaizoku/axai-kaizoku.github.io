import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  USER_ID,
} from "@/constants/localstorage.const";
import * as localStorageActions from "@/utils/localstorage";
import Cookies from "js-cookie";
import { decodeJWT } from "./jwt";

export interface AuthData {
  accessToken: string | null;
  refreshToken: string | null;
  userId: string | null;
}

export const getAuthSync = (): AuthData => {
  let accessToken = Cookies.get(ACCESS_TOKEN);
  let refreshToken = Cookies.get(REFRESH_TOKEN);
  let userId = Cookies.get(USER_ID);

  if (!accessToken || !refreshToken) {
    accessToken = localStorageActions.getItem(ACCESS_TOKEN);
    refreshToken = localStorageActions.getItem(REFRESH_TOKEN);
    userId = localStorageActions.getItem(USER_ID);
  }

  return processAuthData(accessToken, refreshToken, userId);
};

export const processAuthData = (
  accessToken: string | null,
  refreshToken: string | null,
  userId: string | null
): AuthData => {
  if (!accessToken || !refreshToken) {
    return {
      accessToken: null,
      refreshToken: null,
      userId: null,
    };
  }

  if (userId === "null" || userId === "undefined" || userId === "") {
    userId = null;
  }

  if (!userId) {
    try {
      const decodedJwt = decodeJWT(accessToken);
      userId = decodedJwt?.sub ?? null;
    } catch {
      userId = null;
    }
  }

  const cookieOptions = { expires: 7 };

  Cookies.set(ACCESS_TOKEN, accessToken, cookieOptions);
  Cookies.set(REFRESH_TOKEN, refreshToken, cookieOptions);

  if (userId) {
    Cookies.set(USER_ID, userId, cookieOptions);
  }

  return {
    accessToken,
    refreshToken,
    userId,
  };
};
