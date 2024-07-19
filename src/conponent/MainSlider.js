import "../componentCss/Main.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAnimation } from "../store/btnClickSlice";
import "../componentCss/MainItem.css";
import "../componentCss/MainItem.css";

const Mainslider = () => {
  const clickbtn = useSelector((state) => state.clickbtn) || [];
  const dispatch = useDispatch();

  const handleButtonClick = (index) => {
    dispatch(toggleAnimation(index));
  };

  return (
    <>
      <div className="main-bg">
        <video src="./mainvideo.mp4" autoPlay loop muted />
        <div className="mainTextBox">
          <h1>YOU GOT THIS</h1>
          <p>이건 그냥 주장의 무게일 뿐이야. 널 믿어.</p>
          <div
            className={`btnBox ${clickbtn[0] ? "animation" : ""}`}
            onClick={() => handleButtonClick(0)}
          >
            <Link className="flex" to={"/"}>
              자세히보기
              <img src="./arrow.png" alt="seemore" />
            </Link>
          </div>
          <div className="backBox"></div>
        </div>
      </div>

      <div className="main-sl">
        <video src="./mainslider.mp4" autoPlay loop muted />
        <div className="mainTextBox">
          <h1>YEEZY</h1>
          <p>전 세계 스트릿 스타일을 사로잡는 70년대 러닝의 아이콘</p>
          <div
            className={`btnBox flex ${clickbtn[1] ? "animation" : ""}`}
            onClick={() => handleButtonClick(1)}
          >
            <Link className=" flex" to={"/"}>
              자세히 보기
              <img src="./arrow.png" alt="seemore" />
            </Link>
          </div>
          <div className="backBox"></div>
        </div>
      </div>
    </>
  );
};

export default Mainslider;
