import "../componentCss/Main.css";

import React from "react";

import JoinEvent from "./JoinEvent.js";
import "../componentCss/MainItem.css";
import "../componentCss/MainItem.css";

const Mainslider = () => {
  return (
    <>
      <div className="main-bg">
        <video src="./mainvideo.mp4" autoPlay loop muted />
        <div className="mainTextBox">
          <h1>YOU GOT THIS</h1>
          <p>이건 그냥 주장의 무게일 뿐이야. 널 믿어.</p>

          <JoinEvent index={0} imgName="arrow.png" />
        </div>
      </div>

      <div className="main-sl">
        <video src="./mainslider.mp4" autoPlay loop muted />
        <div className="mainTextBox">
          <h1>YEEZY</h1>
          <p>전 세계 스트릿 스타일을 사로잡는 70년대 러닝의 아이콘</p>

          <JoinEvent index={1} imgName="arrow.png" />
        </div>
      </div>
    </>
  );
};

export default Mainslider;
