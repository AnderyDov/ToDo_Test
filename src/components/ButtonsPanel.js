import React from "react";
import { useDispatch, useSelector } from "react-redux"; // Хуки редакса
import { clearCompleted, changeFilter } from "../store/appSlice"; // Редюсеры  для фильтрации и удаления выполненных щадач

export default function ButtonsPanel() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.app.count); // Состояние колличество задач
  const filter = useSelector((state) => state.app.filter); // Состояние фильтрации

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
      <div className="btn-group">
        <input
          type="radio"
          name="options"
          data-title="all"
          checked={filter === "all" ? true : false}
          onChange={changeFilterFunc}
          className="btn btn-ghost btn-sm text-[10px]"
          value="All"
        />
        <input
          type="radio"
          name="options"
          data-title="active"
          onChange={changeFilterFunc}
          checked={filter === "active" ? true : false}
          className="btn btn-ghost btn-sm text-[10px]"
          value="Active"
        />
        <input
          type="radio"
          name="options"
          data-title="completed"
          onChange={changeFilterFunc}
          checked={filter === "completed" ? true : false}
          className="btn btn-ghost btn-sm text-[10px]"
          value="Completed"
        />
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
