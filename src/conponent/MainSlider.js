import "../componentCss/Main.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../componentCss/MainItem.css";
import "../componentCss/MainItem.css";

const Mainslider = () => {
  const [clickbtn, setClickbtn] = useState([false, false, false]);

  const addAnimation = (index) => {
    setClickbtn((prevClickbtn) =>
      prevClickbtn.map((state, idx) => (idx === index ? !state : state))
    );
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
            onClick={() => addAnimation(0)}
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
            onClick={() => addAnimation(1)}
          >
            <Link className=" flex" to={"/"}>
              자세히 보기
              <img src="./arrow.png" alt="seemore" />
            </Link>
          </div>
          <div className="backBox"></div>
        </div>
      </div>
      {/* <div className="main-img">
        <img src="./mainImg.avif" alt="slideImg" />
        <div className="mainTextBox blackB">
          <h1>YEEZY</h1>
          <p>출시 제품은 국가마다 상이합니다.</p>
          <div
            className={`btnBox flex ${clickbtn[2] ? "animation" : ""}`}
            onClick={() => addAnimation(2)}
          >
            <Link className=" flex" to={"/"}>
              자세히 보기
              <img src="./arroww.png" alt="seemore" />
            </Link>
          </div>
          <div className="backBox witeBox"></div>
        </div>
      </div> */}
    </>
  );
};

export default Mainslider;
