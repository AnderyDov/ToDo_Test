import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: true, // Тема по умолччанию тёмная
    list: [
      {
        text: "ppp",
        status: "active"
      }
    ]
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload.themeBoolean;
    },
    addTask(state, action) {
      state.list.push({
        text: action.payload.textString,
        status: "active"
      });
    }
  }
});

export const { setTheme, addTask } = appSlice.actions;

export default appSlice.reducer;
