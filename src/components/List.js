import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // Хуки редакса
import SvgComponent from "../components/SvgComponent"; // Компонент для отрисовки SVG картинок
import { delTask, changeTask, changeStatus, setCount } from "../store/appSlice"; // Редюсеры управления состоянием приложения
import ButtonsPanel from "./ButtonsPanel"; // Компонент панель кнопок для управления приложением

export default function List() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.app.list); // Состояние список задач
  const filter = useSelector((state) => state.app.filter); // Состояние режим фильтрации

  // Функция удаляет задачу по её ID
  function deleteItem(e) {
    dispatch(delTask({ idString: e.target.dataset.id }));
  }

  // Фукнция вставляет инпут для редактирования задачи, вешает на него событие потери фокуса
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

  // Функция срабатывает при потери фокуса заменяе инпут на его значение
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

  // Функци изменения статуса задачаи, срабатывает по клику
  function changeStatusFunc(e) {
    dispatch(changeStatus({ idString: e.currentTarget.dataset.id }));
  }

  // Взависимости от состояния фильтрации добовляет элементы списка
  let showList = [...list].map((el) => {
    let li = (
      <li
        className="relative m-4   border-b-[0.5px] flex items-center"
        key={el.id}
      >
        <div
          className="w-5 h-5 mr-2 rounded-full outline outline-1 p-1  cursor-pointer"
          data-id={el.id}
          onClick={changeStatusFunc}
        >
          {el.status === true && <SvgComponent name="ok" />}
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
    if (filter === "completed" && el.status === true) {
      return li;
    }
    if (filter === "active" && el.status === false) {
      return li;
    }
    if (filter === "all") {
      return li;
    }
  });

  // Эффект срабатывает при перерендере и изменяет колличество элементов списаки для показа на страние
  useEffect(() => {
    dispatch(setCount({ countNumber: document.querySelectorAll("li").length }));
  });

  let out = (
    <div className="w-6/12 min-w-[500px]  mt-7 border rounded-md">
      <ol>{showList}</ol>
      <ButtonsPanel />
    </div>
  );

  return out;
}
