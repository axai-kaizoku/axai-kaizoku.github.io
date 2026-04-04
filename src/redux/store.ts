import { getAuthSync } from "@/utils/auth";
import { authSlice } from "./slices/auth.slice";
import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./slices/task.slice";
import { taskApi } from "@/api/task";

export const makeStore = () => {
  const preloadedState = {
    auth: {
      ...authSlice.getInitialState(),
      ...((typeof window !== "undefined" && getAuthSync()) || {}),
      isAuthLoaded: false,
    },
  };

  return configureStore({
    reducer: {
      auth: authSlice.reducer,
      task: taskSlice.reducer,
      [taskApi.reducerPath]: taskApi.reducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(taskApi.middleware),
  });
};

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
