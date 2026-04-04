import { Method } from "./methods";

export const AUTH = {
  refreshToken: {
    url: "/auth/refreshtoken",
    method: Method.POST,
  },
  signup: {
    url: "/auth/signup",
    method: Method.POST,
  },
  login: {
    url: "/auth/signin",
    method: Method.POST,
    params: (email: string, password: string) => ({ email, password }),
  },
};

export const TASKS = {
  getAllTasks: {
    url: "/tasks",
    method: Method.GET,
  },
  getTaskById: {
    url: `/tasks/`,
    method: Method.GET,
    params: (id: string) => ({ id }),
  },
};
