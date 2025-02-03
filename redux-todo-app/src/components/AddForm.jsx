import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../redux/slices/todosSlice";
// import { addTodo } from "../redux/modules/todos";

const AddForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(
            addtodo({
              id: new Date().getTime(),
              title: todo,
            })
          );
        }}
      >
        추가
      </button>
    </div>
  );
};

export default AddForm;
