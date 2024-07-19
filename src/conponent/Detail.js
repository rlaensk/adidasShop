import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openSizeModal,
  closeSizeModal,
  openDeliveryModal,
  closeDeliveryModal,
  openPrecautionsModal,
  closePrecautionsModal,
  openAsModal,
  closeAsModal,
  openInfoModal,
  closeInfoModal,
} from "../store/detailSlice.js";
import { Link } from "react-router-dom";
import "./../componentCss/Main.css";
import Mainslider from "./MainSlider";
import { adidasBest } from "./AdidasBest.js";

const Detail = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // 스크롤 위치

  const [sizeText, setSizeText] = useState(""); //사이즈 저장 state
  const [btnClick, setBtnClick] = useState(false);
  const [clickSize, setClickSize] = useState(false);
  //store에서 생
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.sizeModal);

  const openModal = () => {
    dispatch();
  };
  const closeModalClick = () => {
    dispatch();
  };
  const ClickcartBtn = () => {
    setBtnClick(!btnClick);
    setTimeout(() => {
      setBtnClick(btnClick);
    }, 600);
  };

  useEffect(() => {
    const handScroll = () => {
      const currentScrollPosition = window.scrollY;
      //특정 스크롤 위치 고정
      if (currentScrollPosition > 120 && currentScrollPosition < 1600) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
      //현재 스크롤 위치 저장
      setScrollPosition(currentScrollPosition);
    };
    window.addEventListener("scroll", handScroll);

    return () => {
      window.removeEventListener("scroll", handScroll);
    };
  }, []);
  // 모달창 클릭하면 스크롤 금지
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  //사이즈 클릭하면 배경색,글자색 변경 or 사이즈 text변수따로저장
  const ClickSizeBtn = () => {
    setClickSize(!clickSize);
  };

  return (
    <div className="detailWrap">
      {isModalOpen ? <SizeConponent onClose={closeModalClick} /> : null}
      <div className="detailImg">
        <div className="imgBox1">
          <img src={""} />
        </div>

        <div className="imgBox2"></div>

        <div className="imgBox3"></div>

        <div className="imgBox4"></div>
      </div>
      <div className={`detailInfo ${isFixed ? "poFixed" : ""}`}>
        <div className="productDetail">
          <div className="catagory">Originals</div>
          <div className="starReview">
            <img src={`${process.env.PUBLIC_URL}/star.PNG`} />
            <p className="ReCount">10</p>
          </div>
        </div>
        <div className="itemName">베이스볼 클래스 트레포일 캡</div>
        <div className="price">35,000원</div>
        <div className="colorBox">
          <div className="colorimg">
            <div className="blackCap">
              <img src={`${process.env.PUBLIC_URL}/Uptoblack1.PNG`} />
            </div>
            <div className="whiteCap">
              <img src={`${process.env.PUBLIC_URL}/Uptowhite1.PNG`} />
            </div>
            <div className="pinkCap">
              <img src={`${process.env.PUBLIC_URL}/Uptopink1.avif`} />
            </div>
            <div className="navyCap">
              <img src={`${process.env.PUBLIC_URL}/Uptonavy1.png`} />
            </div>
          </div>
          <div className="colorText">
            <p>Black/White</p>
          </div>
        </div>
        <div className="sizebox">
          <p>구입 가능한 사이즈</p>
          <button
            className={`size ${clickSize ? "changeSize" : ""}`}
            onClick={() => {
              ClickSizeBtn();
            }}
          >
            0SFW
          </button>
          <div className="sizeGuide">
            <img src={`${process.env.PUBLIC_URL}/ruler.png`} alt="sizeGuide" />
            <button className="guideText" onClick={openModal}>
              사이즈 가이드
            </button>
          </div>
        </div>

        <div className="buyBtn">
          <div className="buyBox">
            <div className="buybtnBox">
              <div
                className={`btnBox ${btnClick ? "animation" : ""}`}
                onClick={() => ClickcartBtn()}
              >
                <Link className="flex" to={""}>
                  장바구니 담기
                  <img src="./arrowW.png" alt="seemore" />
                </Link>
              </div>
              <div className="backBox buyBackBox"></div>
            </div>
            <div className="wishlist">
              <img
                src={`${process.env.PUBLIC_URL}/hartwhite.png`}
                alt="wishlist"
              />
            </div>
          </div>
        </div>
        <div className="notisBox">
          <div className="deliveryBox">
            <img
              src={`${process.env.PUBLIC_URL}/delivery.png`}
              alt="delivery"
            />
            <div className="notisText">배송 / 반품/ 교환</div>
          </div>
          <div className="precautionsBox">
            <img
              src={`${process.env.PUBLIC_URL}/precautions.png`}
              alt="precautions"
            />
            <div className="notisText">세탁 및 취급 시 주의사항</div>
          </div>
          <div className="AS">
            <img src={`${process.env.PUBLIC_URL}/check.png`} />
            <div className="notisText">품질 보증 및 AS 정보</div>
          </div>
          <div className="info">
            <img src={`${process.env.PUBLIC_URL}/check.png`} />
            <div className="notisText">상품 제조연월 정보</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SizeConponent = ({ onClose }) => {
  return (
    <div className="modalWrap">
      <div className="modalBox">
        <h2>HAT & CAP SIZING</h2>
        <table className="sizeTable" border={1}>
          <tr>
            <th>Sizes</th>
            <th>
              Babies<p>[OSFB]</p>
            </th>
            <th>
              Toddlers<p>[OSFT]</p>
            </th>

            <th>
              Kids<p>[OSFC]</p>
            </th>

            <th>
              Youth<p>[OSFY]</p>
            </th>

            <th>
              Women<p>[S/M] - [OSFM]</p>
            </th>

            <th>
              Men <p>[M/L] - [OSFM]</p>
            </th>

            <th>
              Large <p>[L/XL] - [OSFL]</p>
            </th>
          </tr>
          <tr>
            <td>Length</td>
            <td>42cm</td>
            <td>48 - 50cm</td>
            <td>52 - 60cm</td>
            <td>54 - 60cm</td>
            <td>54 - 56cm</td>
            <td>56 - 58cm</td>
            <td>58 - 60cm</td>
          </tr>
        </table>
        <button
          className="close"
          onClick={() => {
            onClose();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};
const DeliveryConponent = ({ onClose }) => {
  return (
    <div className="modalWrap">
      <div className="modalBox">
        <h2>HAT & CAP SIZING</h2>
        <div className="deliveryBox"></div>
        <button
          className="close"
          onClick={() => {
            onClose();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};
const PrecautionsComponent = ({ onClose }) => {
  return <></>;
};
const AsComponent = ({ onClose }) => {
  return <></>;
};
const info = ({ onClose }) => {
  return <></>;
};
export {
  Detail,
  SizeConponent,
  DeliveryConponent,
  PrecautionsComponent,
  AsComponent,
  info,
};
