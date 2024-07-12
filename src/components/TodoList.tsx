import { deleteTodo } from "@/reducer/todoSlice";
import { RootState } from "@/store";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  function handleRemoveTodo(index: number) {
    dispatch(deleteTodo(index));
  }

  return (
    <section>
      <div>
        {todos.length == 0 && (
          <div className="text-center mt-4">--- Todo list Empty ---</div>
        )}
      </div>
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
  );
}

export default TodoList;
