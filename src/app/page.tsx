"use client";
import TodoForm from "@/components/TodoForm";
import { RootState } from "@/store";
import dynamic from "next/dynamic";
import React from "react";
import { useSelector } from "react-redux";

const TodosList = dynamic(() => import("../components/TodoList"));

function Home() {
  const { todos } = useSelector((state: RootState) => state.todo);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <section className="todo__form">
        {/* <DynamicForm />
        <PasswordForm /> */}
        <TodoForm />
        {todos.length > 0 && <TodosList />}
      </section>
    </div>
  );
}

export default Home;
