import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCompleted } from "../store/appSlice";

export default function ButtonsPanel() {
  const dispatch = useDispatch();
  const len = useSelector((state) => state.app.list).length;

  function clearCompletedFunc() {
    dispatch(clearCompleted());
  }

  let out = (
    <div className="flex justify-around my-1">
      <div className="flex items-center">{len} items</div>
      <div className="flex space-x-1">
        <button
          type="radio"
          name="options"
          data-title="all"
          className="btn btn-ghost btn-sm text-[10px]"
        >
          All
        </button>
        <button
          type="radio"
          name="options"
          data-title="active"
          className="btn btn-ghost btn-sm text-[10px]"
        >
          Active
        </button>
        <button
          type="radio"
          name="options"
          data-title="completed"
          className="btn btn-ghost btn-sm text-[10px]"
        >
          Completed
        </button>
      </div>
      <button
        className="btn btn-ghost btn-sm text-[10px]"
        onClick={clearCompletedFunc}
      >
        Clear completed
      </button>
    </div>
  );

  return out;
}
