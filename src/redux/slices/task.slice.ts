import { Task } from "@/types/task";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: Task[] | null;
  task: Task | null;
}

const initialState: InitialState = {
  task: null,
  tasks: null,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});
