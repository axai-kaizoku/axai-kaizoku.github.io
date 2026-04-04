"use client";

import { useGetAllTasksQuery } from "@/api/task";
import { useAppSelector } from "@/redux/hooks";

export default function Page() {
  const { data } = useGetAllTasksQuery(undefined);
  const auth = useAppSelector((state) => state.auth);
  return (
    <div>
      {JSON.stringify(data, null, 2)}
      <br />
      <br />
      <hr />
      auth:
      {JSON.stringify(auth, null, 2)}
    </div>
  );
}
