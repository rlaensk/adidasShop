import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./../componentCss/MainEvent.css";
import { useSelector } from "react-redux";
const MainEvent = () => {
  let mainE = useSelector((state) => state.mainEvent);
  console.log(mainE);
  const [arrowBtn, setArrowBtn] = useState(false);

  let $MEbox = document.querySelector(".MEbox");
  let $MeRow = document.querySelector(".MeRow");
  let $nextBtn = document.querySelector(".nextbtn");

  /*MEbox에 마우스를 올리고 
left가 0이면
nextbtn이 나타나고 
nextbtn을 클릭하면 
right가 1140px로 바뀌고 
right가 1140px이면 
prvebtn이 나타마고 nextbtn 사라짐

*/

  return (
    <>
      <Container className="MEbox">
        <button className="prevbtn">
          <img src={`${process.env.PUBLIC_URL}/arrow.png`} />
        </button>
        <Row md={7} className="MeRow">
          {mainE.map((item) => (
            <Col className="MeCol" key={item.id}>
              {item.type === "image" ? (
                <Link to={"/"} className="linkBox">
                  <img
                    src={`${process.env.PUBLIC_URL}${item.url}`}
                    alt={item.title}
                  />
                </Link>
              ) : item.type === "video" ? (
                <Link to={"/"} className="linkBox">
                  <video
                    src={`${process.env.PUBLIC_URL}${item.url}`}
                    autoPlay
                    muted
                    loop
                  />
                </Link>
              ) : null}
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <Link to={"/"} className="nowbuy">
                지금 구매하기
              </Link>
            </Col>
          ))}
        </Row>
        <button className="nextbtn">
          <img src={`${process.env.PUBLIC_URL}/arrow.png`} />
        </button>
      </Container>
    </>
  );
};
export default MainEvent;
