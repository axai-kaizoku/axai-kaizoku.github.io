import { API_BASE_URL } from "@/constants/global.const";
import axios, {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/redux/store";
import { refreshAccessToken } from "@/api/auth";
import { setAuth } from "@/redux/slices/auth.slice";
import * as localStorageActions from "@/utils/localstorage";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/localstorage.const";
import toast from "react-hot-toast";
import { processAuthData } from "@/utils/auth";

let lastErrorTime = 0;
const debounceToast = (message: string) => {
  const now = Date.now();
  if (now - lastErrorTime > 1000) {
    toast.error(message);
    lastErrorTime = now;
  }
};

const suppressErrorToastForRoutes = [
  {
    route: "/transactions/sellConfirm",
    method: "POST",
    allowErrorCodes: ["1005"],
  },
];

const shouldSuppressErrorToast = (
  url: string,
  method: string | undefined,
  errorCode?: string
) => {
  try {
    const pathname = new URL(url, axiosInstance.defaults.baseURL).pathname;

    const matchedRoute = suppressErrorToastForRoutes.find(
      ({ route, method: routeMethod }) => {
        const methodMatches =
          !routeMethod || routeMethod.toUpperCase() === method?.toUpperCase();

        return (
          methodMatches && (pathname === route || pathname.endsWith(route))
        );
      }
    );

    if (!matchedRoute) return false;

    if (errorCode && matchedRoute.allowErrorCodes?.includes(errorCode)) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
};

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      baseURL?: string;
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ method, url, baseURL, data, headers, params }, api) => {
    const { getState, dispatch } = api;
    const state = getState() as RootState;
    const accessToken = (getState() as RootState).auth.accessToken;
    const refreshToken = (getState() as RootState).auth.refreshToken;
    console.log({ accessToken });

    const requestHeaders = {
      ...headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    };

    const requestConfig: AxiosRequestConfig = {
      url,
      method,
      data,
      params,
      headers: requestHeaders,
      baseURL: baseURL ?? axiosInstance.defaults.baseURL,
    };

    try {
      const result = await axiosInstance.request(requestConfig);
      return { data: result.data.data };
    } catch (error) {
      const axiosError = error as AxiosError;
      const originalRequest =
        axiosError.config as InternalAxiosRequestConfig & {
          _retry: boolean;
        };
      const status = axiosError.response?.status;

      if (
        status === 401 &&
        !originalRequest?._retry &&
        accessToken &&
        refreshToken
      ) {
        originalRequest._retry = true;
        try {
          const newTokens = await refreshAccessToken({
            accessToken,
            refreshToken,
          });
          dispatch(
            setAuth({
              accessToken: newTokens.accessToken,
              refreshToken: newTokens.refreshToken,
            })
          );

          processAuthData(newTokens.accessToken, newTokens.refreshToken, null);
          localStorageActions.setItem(ACCESS_TOKEN, newTokens.accessToken);
          localStorageActions.setItem(REFRESH_TOKEN, newTokens.refreshToken);

          const retryRequest = await axiosInstance.request({
            ...requestConfig,
            headers: {
              ...(requestConfig.headers ?? {}),
              ...requestHeaders,
              Authorization: `Bearer ${newTokens.accessToken}`,
            },
            baseURL:
              originalRequest.baseURL ??
              requestConfig.baseURL ??
              axiosInstance.defaults.baseURL,
          });

          return { data: retryRequest.data.data };
        } catch {
          return {
            error: {
              status: 401,
              data: "Session expired, please login again.",
            },
          };
        }
      }

      const errorData = axiosError.response?.data as any;
      const errorCode = errorData?.errorCode ?? errorData?.code;

      if (
        [409, 404, 400, 401, 500].includes(status ?? 0) &&
        !shouldSuppressErrorToast(url, method, errorCode)
      ) {
        if (Array.isArray(errorData?.error)) {
          errorData.error.forEach((msg: string) => debounceToast(msg));
        } else {
          debounceToast(
            errorData?.error || errorData?.message || "Something went wrong"
          );
        }
      }

      return {
        error: {
          status: status ?? 500,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };
