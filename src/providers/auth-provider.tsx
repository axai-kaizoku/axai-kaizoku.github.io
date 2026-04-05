"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setAuth, setIsAuthLoaded } from "@/redux/slices/auth.slice";
import { getAuthSync } from "@/utils/auth";
import { useEffect, type PropsWithChildren } from "react";

export function AuthProvider({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch();
  const { isAuthLoaded } = useAppSelector((state) => state.auth);
  useEffect(() => {
    const tokens = getAuthSync();
    if (tokens?.accessToken) {
      dispatch(setAuth(tokens));
    }
    dispatch(setIsAuthLoaded({ isAuthLoaded: true }));
  }, [dispatch]);
  if (!isAuthLoaded) {
    return null;
  }
  return <>{children}</>;
}
