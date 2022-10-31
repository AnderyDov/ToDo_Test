import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/appSlice";
import uuid from "react-uuid";

export function InputTask() {
  const dispatch = useDispatch();

  function addNewTask(e) {
    if (e.target.value !== "") {
      dispatch(addTask({ textString: e.target.value, idString: uuid() }));
    }
    e.target.value = "";
  }

  let out = (
    <div className="w-6/12 mt-7 border rounded-md p-2 flex justify-center">
      <input
        type="text"
        placeholder="add task"
        className="input input-sm w-full max-w-xs input-bordered input-primary"
        onBlur={addNewTask}
      />
    </div>
  );

  return out;
}
