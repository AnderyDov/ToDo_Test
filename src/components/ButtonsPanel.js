import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Хуки редакса
import { clearCompleted, changeFilter } from "../store/appSlice"; // Редюсеры  для фильтрации и удаления выполненных щадач

export default function ButtonsPanel() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.app.count); // Состояние колличество задач

  // Функция удаляет выполненные задачи
  function clearCompletedFunc() {
    dispatch(clearCompleted());
  }

  // Функция изменяет фильтр для показа задач
  function changeFilterFunc(e) {
    dispatch(changeFilter({ filterString: e.target.dataset.title }));
  }

  let out = (
    <div className="flex justify-around my-1">
      <div className="flex items-center">{count} items</div>
      <div className="flex space-x-1">
        <button
          type="radio"
          name="options"
          data-title="all"
          onClick={changeFilterFunc}
          className="btn btn-ghost btn-sm text-[10px]"
        >
          All
        </button>
        <button
          type="radio"
          name="options"
          data-title="active"
          onClick={changeFilterFunc}
          className="btn btn-ghost btn-sm text-[10px]"
        >
          Active
        </button>
        <button
          type="radio"
          name="options"
          data-title="completed"
          onClick={changeFilterFunc}
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
