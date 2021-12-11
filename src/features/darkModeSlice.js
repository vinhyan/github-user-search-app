import { createSlice } from "@reduxjs/toolkit";

export const toggleDarkMode = {
  type: "darkMode/toggleDarkMode",
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: false,
  reducers: {
    toggleDarkMode: (state) => {
      return (state = !state);
    },
  },
});

export const darkModeSelect = (state) => state.darkMode;

export default darkModeSlice.reducer;
