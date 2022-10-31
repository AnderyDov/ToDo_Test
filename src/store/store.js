import { configureStore } from "@reduxjs/toolkit"; // Хук редакса для настройки хранилища
import appReducer from "./appSlice"; // Слайз для состояния приложения

export default configureStore({
  reducer: {
    app: appReducer,
  },
});