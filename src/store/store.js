import { configureStore, createSlice } from "@reduxjs/toolkit";

// navMenu라는 slice를 생성합니다.
let navMenu = createSlice({
  name: "navMenu",
  initialState: [],
  reducers: {}, // 현재 reducers는 비어 있습니다.
});

// Redux store를 설정합니다.
export default configureStore({
  reducer: {
    navMenu: navMenu.reducer, // store에 navMenu slice를 추가합니다.
  },
});
