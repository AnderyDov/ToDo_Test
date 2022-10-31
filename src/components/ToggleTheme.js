import React from "react";
import SvgComponent from "./SvgComponent";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/appSlice";

export default function ToggleTheme() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.app.theme);

  function changeTheme() {
    dispatch(setTheme({ themeBoolean: !theme }));
  }

  let out = (
    <div className="fixed top-6 right-6 flex">
      <div className="w-6 h-6 mr-2">
        <SvgComponent name={theme ? "moon" : "sun"} />
      </div>
      <input type="checkbox" className="toggle" onChange={changeTheme} />
    </div>
  );

  return out;
}
