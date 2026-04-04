import axios from "axios";
import { AUTH } from "./endpoints";
import { API_BASE_URL } from "@/constants/global.const";
import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib/axios";
import { LoginInfo } from "@/types/user";

export const refreshAccessToken = async (tokens: {
  accessToken: string;
  refreshToken: string;
}): Promise<{ accessToken: string; refreshToken: string }> => {
  const response = await axios.post(
    `${API_BASE_URL}${AUTH.refreshToken.url}`,
    {
      refreshToken: tokens.refreshToken,
    },
    {
      headers: {
        Authorization: tokens.accessToken,
      },
    }
  );

  return response.data.data;
};

export const login = async (tokens: {
  email: string;
  password: string;
}): Promise<LoginInfo> => {
  const response = await axios.post(`${API_BASE_URL}${AUTH.login.url}`, {
    email: tokens.email,
    password: tokens.password,
  });

  return response.data.data;
};

export const signup = async (tokens: {
  email: string;
  password: string;
}): Promise<LoginInfo> => {
  const response = await axios.post(`${API_BASE_URL}${AUTH.signup.url}`, {
    email: tokens.email,
    password: tokens.password,
  });

  return response.data.data;
};
