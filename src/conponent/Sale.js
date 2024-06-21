import { Link } from "react-router-dom";
import "../componentCss/Sale.css";
import { Container, Row } from "react-bootstrap";
import { sale } from "../date/itenm.js";
import React from "react";
const Sale = () => {
  return (
    <div className="saleBox">
      <h1>UP TO 50% OFF</h1>
      <p>
        SS24 시즌오프 세일 얼리버드, 온라인 단독 최대 51% 혜택을 놓치지 마세요!
      </p>
      <Container className="productbox">
        <Row className="flex containerRow" md={4}>
          {sale.map((item, index) => (
            <Link to="/saleMan" key={index}>
              <img
                src={`${process.env.PUBLIC_URL}${item.url}`}
                alt="saleItem"
              />
              <div className="imgTextBox">
                <span
                  className="persent common
"
                >
                  %
                </span>
                <span
                  className="now common
"
                >
                  {item.gender} 제품 구매하기
                </span>
              </div>
            </Link>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Sale;
