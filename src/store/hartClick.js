import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  upto: [],
  y_3: [],
  last: [],
  comfy: [],
};
const itemSlice = createSlice({
  name: "",
  intialState,
  reducers: {
    clickHart(state, action) {
      const { category, id } = action.payload;
      const item = state[category].find((item) => item.id === id);
      if (item) {
        item.clicked = !item.clicked;
      } else {
        state[category].push({ id, clicked: true });
      }
    },
    deleteItem(state, action) {
      const { category, id } = action.payload;
      state[category] = state[category].filter((item) => item.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(state[category]));
    },
  },
});
export const { clickHart, deleteItem } = itemSlice.actions;

export default itemSlice;
