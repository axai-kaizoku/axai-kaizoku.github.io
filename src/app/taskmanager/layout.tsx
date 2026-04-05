import type { PropsWithChildren } from "react";
import { TaskManagerAuthProvider } from "./login/_components/taskmanager-auth";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <TaskManagerAuthProvider>{children}</TaskManagerAuthProvider>
    </div>
  );
}
