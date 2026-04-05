"use client";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect, type PropsWithChildren } from "react";

export const TaskManagerAuthProvider = ({ children }: PropsWithChildren) => {
  const isAuthLoaded = useAppSelector((state) => state.auth.isAuthLoaded);
  const router = useRouter();
  useEffect(() => {
    if (!isAuthLoaded) {
      router.push("/taskmanager/login");
    }
  }, [isAuthLoaded, router]);
  return <>{children}</>;
};
