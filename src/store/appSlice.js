import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: true, // Тема по умолччанию тёмная
    list: []
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload.themeBoolean;
    },
    addTask(state, action) {
      state.list.push({
        id: action.payload.idString,
        text: action.payload.textString,
        status: "active"
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
    }
  }
});

export const { setTheme, addTask, delTask, changeTask } = appSlice.actions;

export default appSlice.reducer;
