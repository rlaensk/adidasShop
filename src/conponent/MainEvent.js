import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./../componentCss/MainEvent.css";

const MainEvent = () => {
  const mainE = useSelector((state) => state.mainEvent);
  const [arrowBtn, setArrowBtn] = useState(false);
  const meBoxRef = useRef(null);
  const meRowRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      console.log("Mouse entered");
      setArrowBtn(true);
      if (prevBtnRef.current) {
        prevBtnRef.current.style.display = "block";
      } else if (nextBtnRef.current) {
        prevBtnRef.current.style.display = "block";
      }
    };

    const handleMouseLeave = () => {
      console.log("Mouse left");
      setArrowBtn(false);
    };

    const $MEbox = meBoxRef.current;

    if ($MEbox) {
      $MEbox.addEventListener("mouseenter", handleMouseEnter);
      $MEbox.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if ($MEbox) {
        $MEbox.removeEventListener("mouseenter", handleMouseEnter);
        $MEbox.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    console.log("Arrow button state changed:", arrowBtn);
  }, [arrowBtn]);

  const handleNextClick = () => {
    if (meRowRef.current) {
      meRowRef.current.style.right = "1140px";
      console.log("Next button clicked");
    }
  };

  const handlePrevClick = () => {
    if (meRowRef.current) {
      meRowRef.current.style.right = "-10px";
      console.log("Prev button clicked");
    }
  };

  return (
    <Container className="MEbox" ref={meBoxRef}>
      {arrowBtn && (
        <button className="prevbtn" ref={prevBtnRef} onClick={handlePrevClick}>
          <img src={`${process.env.PUBLIC_URL}/arrow.png`} alt="이전" />
        </button>
      )}
      <Row md={7} className="MeRow" ref={meRowRef}>
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
      {arrowBtn && (
        <button className="nextbtn" ref={nextBtnRef} onClick={handleNextClick}>
          <img src={`${process.env.PUBLIC_URL}/arrow.png`} alt="다음" />
        </button>
      )}
    </Container>
  );
};

export default MainEvent;
