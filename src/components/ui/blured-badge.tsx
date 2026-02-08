"use client";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

export const BluredBadge = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-slate-50/5 backdrop-blur-sm text-black text-sm rounded-full py-2 px-3.5 border",
        className
      )}
    >
      {children}
    </div>
  );
};
