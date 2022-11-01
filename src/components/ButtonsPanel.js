import React from "react";
import { useSelector } from "react-redux";

export default function ButtonsPanel() {
  const len = useSelector((state) => state.app.list).length;

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
      <button className="btn btn-ghost btn-sm text-[10px]">
        Clear completed
      </button>
    </div>
  );

  return out;
}
