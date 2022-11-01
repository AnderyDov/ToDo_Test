import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SvgComponent from "../components/SvgComponent";
import { delTask, changeTask } from "../store/appSlice";

export function List() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.app.list);

  function deleteItem(e) {
    dispatch(delTask({ idString: e.target.dataset.id }));
  }

  function endChangeTaskText(e) {
    let t = e.target.value;
    dispatch(
      changeTask({
        idString: e.target.parentElement.dataset.id,
        textString: e.target.value
      })
    );
    e.target.parentElement.innerHTML = t;
  }

  function startChangeTaskText(e) {
    let t = e.target.textContent;
    let inp = document.createElement("input");
    inp.value = t;
    inp.classList.add("input", "input-bordered", "input-sm");
    e.target.innerHTML = "";
    e.target.append(inp);
    inp.focus();
    inp.onblur = endChangeTaskText;
  }

  let showList = [...list].map((el) => {
    return (
      <li
        className="relative m-4   border-b-[0.5px] flex items-center"
        key={el.id}
      >
        <div className="w-5 h-5 mr-2 rounded-full outline outline-1 p-1  cursor-pointer">
          {el.status === "complited" && <SvgComponent name="moon" />}
        </div>
        <span
          className="flex items-center overflow-hidden max-w-[70%]  cursor-pointer"
          onClick={startChangeTaskText}
          data-id={el.id}
        >
          {el.text}{" "}
        </span>
        <button
          className="absolute btn btn-xs btn-ghost text-[10px] flex self-center right-0  cursor-pointer"
          data-id={el.id}
          onClick={deleteItem}
        >
          del
        </button>
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

  let out = (
    <div className="w-6/12 min-w-[500px]  mt-7 border rounded-md">
      <ol>{showList}</ol>
      {panel}
    </div>
  );

  return out;
}
