import React from "react";
import { useDispatch } from "react-redux"; // Хук редакса для изменения состояния
import { addTask } from "../store/appSlice"; // Редюсер для доьавления задачи
import uuid from "react-uuid"; // Библиотека для ганерации случайных ID

export default function InputTask() {
  const dispatch = useDispatch();

  // Функция добавления новой задачи, срабатывае при потере фокуса
  function addNewTask(e) {
    if (e.target.value !== "") {
      dispatch(addTask({ textString: e.target.value, idString: uuid() }));
    }
    e.target.value = "";
  }

  // Функция сбрасввания фокуса с инпута по нажатию "Enter"
  function addTaskPressEnter(e) {
    if (e.key === "Enter") {
      e.target.blur();
    }
  }

  let out = (
    <div className="w-6/12 min-w-[500px] mt-7 border rounded-md p-2 flex justify-center">
      <input
        type="text"
        placeholder="add task"
        className="input input-sm w-full max-w-xs input-bordered input-primary"
        onBlur={addNewTask}
        onKeyDown={addTaskPressEnter}
      />
    </div>
  );

  return out;
}
