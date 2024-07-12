import { ITodo } from "@/types/todo";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IForm {
  text: string;
}

export interface TodoState {
  todos: Array<ITodo>;
  form: IForm;
}

const initialState: TodoState = {
  todos: [],
  form: {
    text: "",
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = [...state.todos, action.payload];
    },
    setText: (state, action: PayloadAction<string>) => {
      state.form = { ...state.form, text: action.payload };
    },
    deleteTodo: (state, action) => {
      state.todos = [
        ...state.todos.slice(0, action.payload),
        ...state.todos.slice(action.payload + 1),
      ];
    },
  },
});

export const { addTodo, setText, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
