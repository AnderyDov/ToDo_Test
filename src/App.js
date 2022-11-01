import React from "react";
import "./App.css";
import { useSelector } from "react-redux"; // Хук редакса для управления состоянием
import ToggleTheme from "./components/ToggleTheme"; // Компонент переключатель темы
import List from "./components/List"; // Компонент отбражающий список задач
import InputTask from "./components/InputTask"; // Компонент поле для ввода текста задачи

export default function App() {
  const theme = useSelector((state) => state.app.theme); // Состояние темы

  let out = (
    <div
      className="flex flex-col h-full items-center p-10"
      data-theme={theme ? "luxury" : "fantasy"}
    >
      TODO LIST
      <ToggleTheme />
      <InputTask />
      <List />
    </div>
  );

  return out;
}
