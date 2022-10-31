import React from "react";
import { useSelector } from "react-redux";
import SvgComponent from "../components/SvgComponent";

export function List() {
  const list = useSelector((state) => state.app.list);
  console.log(list);

  let showList = [...list].map((el, i) => {
    return (
      <li
        className="m-4 indent-4  border-b-[0.5px] flex justify-between items-center"
        key={i}
      >
        <div className="w-5 h-5 rounded-full outline outline-1 p-1">
          {el.status === "complited" && <SvgComponent name="moon" />}
        </div>
        <span>
          {el.text}{" "}
          <button className="btn btn-xs btn-ghost ml-2 text-[10px]">del</button>{" "}
        </span>
      </li>
    );
  });

  let panel = (
    <div className="flex justify-around my-1">
      <div className="flex items-center">777</div>
      <div className="flex space-x-1">
        <button
          type="radio"
          name="options"
          data-title="all"
          className="btn btn-ghost btn-sm"
        >
          All
        </button>
        <button
          type="radio"
          name="options"
          data-title="active"
          className="btn btn-ghost btn-sm"
        >
          Active
        </button>
        <button
          type="radio"
          name="options"
          data-title="completed"
          className="btn btn-ghost btn-sm"
        >
          Completed
        </button>
      </div>
      <button className="btn btn-ghost btn-sm">Clear completed</button>
    </div>
  );

  let out = (
    <div className="w-6/12  mt-7 border rounded-md">
      <ol>{showList}</ol>
      {panel}
    </div>
  );

  return out;
}
