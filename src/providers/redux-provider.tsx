"use client";

import { type AppStore, store } from "@/redux/store";
import { useRef, type PropsWithChildren } from "react";
import { Provider } from "react-redux";

export const ReduxProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = store;
  }
  return <Provider store={store}>{children}</Provider>;
};
