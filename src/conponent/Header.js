import { Nav, Navbar, Container } from "react-bootstrap";
import "../componentCss/Header.css";
import headEvent from "../date/headerEvent";
import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  CategoryMen,
  CategoryWomen,
  CategoryKids,
  CategorySports,
  CategoryBrands,
  CategoryOnlineOutlet,
} from "./CategorySlide";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categoryList, setCategoryList] = useState({ menu1: false }); //각 카테고리 메뉴상태를 관리하는 스테이트
  const [hoverMenu, setHoverMenu] = useState("");

  const navigate = useNavigate();

  const categorynavList = [
    { id: "menu1", title: "MEN", url: "" },
    { id: "menu2", title: "WOMEN", url: "" },
    { id: "menu3", title: "KIDS", url: "" },
    { id: "menu4", title: "SPORTS", url: "" },
    { id: "menu5", title: "BRANDS", url: "" },
    { id: "menu6", title: "ONLINE OUTLET", url: "" },
    { id: "menu7", title: "YEEZY", url: "" },
  ];
  const categoryComponent = {
    menu1: <CategoryMen />,
    menu2: <CategoryWomen />,
    menu3: <CategoryKids />,
    menu4: <CategorySports />,
    menu5: <CategoryBrands />,
    menu6: <CategoryOnlineOutlet />,
  };

  const mouseHover = (id) => {
    setCategoryList((menu) => ({
      [id]: !menu[id],
    }));
    setHoverMenu(id);
    console.log(categoryList);
  };
  const mouseLeave = () => {
    setHoverMenu("");
  };

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headEvent.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [location.pathname]);

  return (
    <div className="mouseLeaveF" onMouseLeave={() => mouseLeave()}>
      <div className="headerWrap">
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
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
            </Navbar.Brand>
            <Nav className="me-auto navCategory">
              {categorynavList.map((state, index) => (
                <Nav.Link
                  key={index}
                  href={state.url}
                  onMouseEnter={() => mouseHover(state.id)}
                >
                  {state.title}
                </Nav.Link>
              ))}
            </Nav>
            <div className="myBoxWrap">
              <div className="helpNav">
                <ul>
                  <li>
                    <Link to={"/"}>도움말</Link>
                  </li>
                  <li>
                    <Link to={"/wishlist"}>위시 리스트</Link>
                  </li>
                  <li>
                    <Link to={"/"}>주문 및 반품</Link>
                  </li>
                </ul>
              </div>

              <div className="myBox">
                <div className="searchBox">
                  <form>
                    <input aria-label="seach" placeholder="search" />
                    <button className="searchBtn" type="submit"></button>
                  </form>
                </div>
                <div
                  className="mypage"
                  aria-label="myPage"
                  onClick={() => navigate("/myPage")}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/user.png`}
                    alt="myPage"
                  />
                </div>
                <div
                  className="wishlist"
                  aria-label="wishList"
                  onClick={() => navigate("/wishList")}
                >
                  <img src={`${process.env.PUBLIC_URL}/wishList.png`} />
                </div>
                <div
                  className="cart"
                  aria-label="cart"
                  onClick={() => navigate("/cart")}
                >
                  <img src={`${process.env.PUBLIC_URL}/cart.png`} alt="cart" />
                </div>
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
      <div className="categoryToggleBOx">
        {hoverMenu && categoryComponent[hoverMenu]}
      </div>
    </div>
  );
};
export default Header;
