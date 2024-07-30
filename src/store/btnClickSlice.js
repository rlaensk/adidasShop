import { createSlice } from "@reduxjs/toolkit";

const clickBtn = createSlice({
  name: "clickBtn",
  initialState: [
    { isActive: false, className: "" },
    { isActive: false, className: "" },
  ],
  reducers: {
    toggleAnimation: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.length) {
        state[index].isActive = !state[index].isActive;
        state[index].className = state[index].isActive ? "animation" : "";
      }
    },
    toggleAnimationDelayed: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.length) {
        state[index].isActive = !state[index].isActive;
        state[index].className = state[index].isActive ? "animation" : "";
      }
    },
  },
});

export const { toggleAnimation, toggleAnimationDelayed } = clickBtn.actions;
export default clickBtn;
