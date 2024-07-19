import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import news from "../date/NewsDate.";
import "./../componentCss/news.css";

const News = () => {
  return (
    <>
      <Container className="newsBox">
        <Row lg={4}>
          {news.map((news, index) => (
            <Col key={index}>
              <Link to={"/"} className="newsText">
                <img src={news.url} />
                <h4 className="newsTitle">{news.title}</h4>
                <p className="newsContents">{news.contents}</p>
                <Link to={"/"} className="seeMore">
                  자세히 보기
                </Link>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default News;
