import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: false, // Тема по умолччанию светлая
    list: [],
    filter: "all",
    count: 0
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload.themeBoolean;
    },
    addTask(state, action) {
      state.list.push({
        id: action.payload.idString,
        text: action.payload.textString,
        status: false
      });
    },
    delTask(state, action) {
      state.list = state.list.filter((el) => {
        return el.id !== action.payload.idString;
      });
    },
    changeTask(state, action) {
      state.list.map((el) => {
        if (el.id === action.payload.idString) {
          el.text = action.payload.textString;
        }
        return el;
      });
    },
    changeStatus(state, action) {
      state.list.map((el) => {
        if (el.id === action.payload.idString) {
          el.status = !el.status;
        }
        return el;
      });
    },
    clearCompleted(state, action) {
      state.list = state.list.filter((el) => {
        return el.status === false;
      });
    },
    changeFilter(state, action) {
      state.filter = action.payload.filterString;
    },
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
