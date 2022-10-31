import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    theme: false // Тема по умолччанию светлая
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload.themeBoolean;
    }
  }
});

export const { setTheme } = appSlice.actions;

export default appSlice.reducer;
