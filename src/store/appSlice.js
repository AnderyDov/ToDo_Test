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
    }
  }
});

export const { setTheme, addTask, delTask } = appSlice.actions;

export default appSlice.reducer;
