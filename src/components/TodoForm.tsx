import { addTodo, setText } from "@/reducer/todoSlice";
import { RootState } from "@/store";
import { ITodo } from "@/types/todo";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

const todoSchema = yup
  .object({
    text: yup.string().required(),
  })
  .required();

function TodoForm() {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(todoSchema),
  });

  const onSubmit = (data: any) => {
    const newTodo: ITodo = { text: data.text };
    dispatch(addTodo(newTodo));
    reset();
  };

  return (
    <section>
      <h1 className="text-center font-bold mb-4 text-lg">TODO LIST</h1>
      <form
        action=""
        className="flex gap-x-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("text")}
          type="text"
          className="border rounded border-1 text-black px-2"
        />
        <button className="bg-blue-500 text-white px-5 py-1 rounded">
          Submit
        </button>
      </form>
    </section>
  );
}

export default TodoForm;
