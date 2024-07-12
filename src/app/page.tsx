"use client";
import { addTodo, deleteTodo, setText } from "@/reducer/todoSlice";
import { RootState } from "@/store";
import { ITodo } from "@/types/todo";
import React, { FormEvent } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const { todos, form } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  function onChange(e: FormEvent<HTMLInputElement>) {
    dispatch(setText(e.currentTarget.value));
  }

  function handleAddTodo() {
    if (form.text) {
      const newTodo: ITodo = { text: form.text };
      dispatch(addTodo(newTodo));
      dispatch(setText(""));
    }
  }

  function handleRemoveTodo(index: number) {
    dispatch(deleteTodo(index));
  }

  console.log(todos);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <section className="todo__form">
        <h1 className="text-center font-bold mb-4 text-lg">TODO LIST</h1>
        <form action={handleAddTodo} className="flex gap-x-3">
          <input
            type="text"
            className="border rounded border-1 text-black px-2"
            value={form.text}
            onChange={onChange}
          />
          <button className="bg-blue-500 text-white px-5 py-1 rounded">
            Submit
          </button>
        </form>

        {todos.map((item, index) => (
          <div className="border border-white mt-4 p-2 rounded flex justify-between items-center">
            <div className="flex gap-x-2">
              <input type="checkbox" />
              <p>{item.text}</p>
            </div>
            <MdDelete
              color="red"
              size={18}
              onClick={() => handleRemoveTodo(index)}
              className="hover:cursor-pointer"
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
