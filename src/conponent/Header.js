import { Nav, Navbar, Container } from "react-bootstrap";
import "../componentCss/Header.css";
import headEvent from "../date/headerEvent";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headEvent.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [location.pathname]);
  console.log(headEvent.title);
  return (
    <>
      <Navbar bg="white" data-bs-theme="white" className="flex headerBox">
        <div className="bakblack flex">
          {location.pathname === "/" && (
            <p className="slide">
              {headEvent[currentIndex].title}
              <img src={`${process.env.PUBLIC_URL}/HEA.png`} alt="공지보기" />
            </p>
          )}
        </div>
        <Container className="navBar">
          <Navbar.Brand href="/" className="logoBox">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">MEN</Nav.Link>
            <Nav.Link href="/">WOMEN</Nav.Link>
            <Nav.Link href="/">KIDS</Nav.Link>
            <Nav.Link href="/">SPORTS</Nav.Link>
            <Nav.Link href="/">BRANDS</Nav.Link>
            <Nav.Link href="/">SEASON OFF SALE</Nav.Link>
          </Nav>
          <div className="myBox">
            <div className="serchBox"></div>
            <div className="mypage"></div>
            <div className="wishlist"></div>
            <div className="cart"></div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
