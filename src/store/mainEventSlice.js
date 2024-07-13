import { createSlice } from "@reduxjs/toolkit";

let mainEvent = createSlice({
  name: "mainEvent",
  initialState: [
    {
      id: 0,
      title: "Man Utd 24/25 Home Kit",
      url: "/me.mp4",
      type: "video",
      content:
        "맨체스터 유나이티드의 DNA를 그대로 담다. 올드 트래포드에서 더욱 빛나는 존재감",
    },
    {
      id: 1,
      title: "COLLABORATION ARCHIVE SALE",
      url: "/me2.png",
      type: "image",
      content:
        "아디클럽 회원만을 위한 최대 50% 특별 할인이 시작되었습니다. [7/2~7/12]",
    },
    {
      id: 2,
      title: "The '80s Collection",
      url: "/me3.png",
      type: "image",
      content: "다시 우리 곁으로 돌아온 레트로.",
    },
    {
      id: 3,
      title: "ADIDAS | DISNEY: Mickey and Friends",
      url: "/me4.png",
      type: "image",
      content: "즐거운 모험을 위해",
    },
    {
      id: 4,
      title: "THE VELOSTAN SMITH",
      url: "/me5.mp4",
      type: "video",
      content:
        "시대를 초월한 클래식 스타일, 역동적인 사이클링의 세계를 하나로 접목하다",
    },
    {
      id: 5,
      title: "Dropset 3",
      url: "/me6.mp4",
      type: "video",
      content: "고중력에도 흔들림 없는 파워풀한 접지력을 경험해 보세요.",
    },
    {
      id: 6,
      title: "SAMBA GOLF",
      url: "/me7.gif",
      type: "image",
      content: "스트릿 스타일 골프화의 아이콘.",
    },
  ],
  reducers: {},
});

export { mainEvent };
