import React, { useContext, useState } from "react";
import { TasksDispatchContext } from "./TaskContext";

const Addtask = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  return (
    <>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: nextId++,
            text: text,
          });
        }}
      >
        Add
      </button>
    </>
  );
};

export default Addtask;
