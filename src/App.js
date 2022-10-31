import React from "react";
import "./App.css";
import ToggleTheme from "./components/ToggleTheme";
import { useSelector } from "react-redux";
import { List } from "./store/List";

export default function App() {
  const theme = useSelector((state) => state.app.theme);

  let out = (
    <div
      className="flex flex-col h-full items-center p-10"
      data-theme={theme ? "luxury" : "fantasy"}
    >
      <ToggleTheme />
      TODO LIST
      <List />
    </div>
  );

  return out;
}
