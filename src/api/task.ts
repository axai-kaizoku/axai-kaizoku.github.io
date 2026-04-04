import { axiosBaseQuery } from "@/lib/axios";
import { createApi } from "@reduxjs/toolkit/query/react";
import { TASKS } from "./endpoints";
import { Task } from "@/types/task";

export const taskApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getAllTasks: builder.query<Task[], void>({
      query: () => ({
        url: TASKS.getAllTasks.url,
        method: TASKS.getAllTasks.method,
      }),
    }),
    getTaskById: builder.query<Task, { id: string }>({
      query: (params) => ({
        url: TASKS.getTaskById.url,
        method: TASKS.getTaskById.method,
        params: TASKS.getTaskById.params(params.id),
      }),
    }),
  }),
});

export const { useGetAllTasksQuery, useGetTaskByIdQuery } = taskApi;
