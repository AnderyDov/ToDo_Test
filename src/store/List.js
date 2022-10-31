import React from "react";
// import SvgComponent from "../components/SvgComponent";

export function List() {
  const panel = (
    <div className="flex justify-around my-1">
      <div className="flex items-center">777</div>
      <div className="flex space-x-1">
        <button
          type="radio"
          name="options"
          data-title="all"
          className="btn btn-ghost"
        >
          All
        </button>
        <button
          type="radio"
          name="options"
          data-title="active"
          className="btn btn-ghost"
        >
          Active
        </button>
        <button
          type="radio"
          name="options"
          data-title="completed"
          className="btn btn-ghost"
        >
          Completed
        </button>
      </div>
      <button className="btn btn-ghost">Clear completed</button>
    </div>
  );

  let out = <div className="w-6/12 m-7 border rounded-md">{panel}</div>;

  return out;
}
