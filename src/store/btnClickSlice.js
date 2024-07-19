import { createSlice } from "@reduxjs/toolkit";

let clickBtn = createSlice({
  name: "clickbtn",
  initialState: [false, false],
  reducers: {
    toggleAnimation: (state, action) => {
      const index = action.payload;
      state[index] = !state[index];
    },
  },
});
export const { toggleAnimation } = clickBtn.actions;
export default clickBtn;
