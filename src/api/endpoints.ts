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
  healthCheck: {
    url: "/healthCheck",
    method: Method.GET,
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
  createTask: {
    url: `/tasks`,
    method: Method.POST,
    body: (title: string, description: string) => ({ title, description }),
  },
};
