import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: false, // Тема по умолччанию светлая
    list: [], // Список дел
    filter: "all", // Фильт показа списка дел
    count: 0 // Колличество показанных элементов списка
  },
  reducers: {
    // Меняет состояние темы
    setTheme(state, action) {
      state.theme = action.payload.themeBoolean;
    },
    // Добавляет новую задачу
    addTask(state, action) {
      state.list.push({
        id: action.payload.idString,
        text: action.payload.textString,
        status: false
      });
    },
    // Удаляет задачу по принятому ID
    delTask(state, action) {
      state.list = state.list.filter((el) => {
        return el.id !== action.payload.idString;
      });
    },
    // Изменяет задачу по принятому ID и тексту
    changeTask(state, action) {
      state.list.map((el) => {
        if (el.id === action.payload.idString) {
          el.text = action.payload.textString;
        }
        return el;
      });
    },
    // Изменяет статус задача
    changeStatus(state, action) {
      state.list.map((el) => {
        if (el.id === action.payload.idString) {
          el.status = !el.status;
        }
        return el;
      });
    },
    // Удаляет выполненные задачи
    clearCompleted(state, action) {
      state.list = state.list.filter((el) => {
        return el.status === false;
      });
    },
    // Изменяет состояние фильтрации
    changeFilter(state, action) {
      state.filter = action.payload.filterString;
    },
    // Изменяет колличество отрисованных элементов списка дел
    setCount(state, action) {
      state.count = action.payload.countNumber;
    }
  }
});

export const {
  setTheme,
  addTask,
  delTask,
  changeTask,
  changeStatus,
  clearCompleted,
  changeFilter,
  setCount
} = appSlice.actions;

export default appSlice.reducer;
