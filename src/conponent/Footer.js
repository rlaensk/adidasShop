import { Link } from "react-router-dom";
import "./../componentCss/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerNav">
        <ul className="footerNavUl">
          <li className="footerNavli">
            <h4>PRODUCTS</h4>
            <li>
              <Link to={"/"}>
                <span>신상품</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>공식 아울렛</span>
              </Link>
            </li>
          </li>
          <li className="footerNavli">
            <h4>SPORTS</h4>
            <li>
              <Link to={"/"}>
                <span>러닝</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>트레이닝</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>아웃도어</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>축구</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>골프</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>요가</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>테니스</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>농구</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>스케이트보딩</span>
              </Link>
            </li>{" "}
            <li>
              <Link to={"/"}>
                <span>수영</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>사이클링</span>
              </Link>
            </li>
          </li>
          <li className="footerNavli">
            <h4>COMPANY INFO</h4>
            <li>
              <Link to={"/"}>
                <span>회사소개</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>채용정보</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>아디다스 앱</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>컨펌드 앱</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>아디다스 블로그</span>
              </Link>
            </li>
          </li>
          <li className="footerNavli">
            <h4>MEMBERSHIP</h4>
            <li>
              <Link to={"/"}>
                <span>아디클럽</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>adidas Runners</span>
              </Link>
            </li>
          </li>
          <li className="footerNavli">
            <h4>SUPPORT</h4>
            <li>
              <Link to={"/"}>
                <span>고객센터, 심의수선</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>주문 / 배송 조회</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>FAQ</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>구매 이용약관</span>
              </Link>
            </li>
          </li>
          <li className="footerNavli footerSns">
            <h4>FOLLOW US</h4>
            <li>
              <Link to={"https://www.facebook.com/adidasKR"}>
                <img
                  src={`${process.env.PUBLIC_URL}/faceBook.png`}
                  alt="Facebook"
                />
              </Link>
            </li>
            <li>
              <Link to={"https://www.instagram.com/adidaskr/"}>
                <img
                  src={`${process.env.PUBLIC_URL}/instargram.png`}
                  alt="instargram"
                />
              </Link>
            </li>
            <li className="snsImg">
              <Link to={"https://x.com/adidas"}>
                <img
                  src={`${process.env.PUBLIC_URL}/twitter.png`}
                  alt="twitter"
                />
              </Link>
            </li>
            <li>
              <Link to={"https://www.tiktok.com/@adidas?lang=en"}>
                <img
                  src={`${process.env.PUBLIC_URL}/tiktok.png`}
                  alt="tiktok"
                />
              </Link>
            </li>
            <li className="snsImg">
              <Link to={"https://www.youtube.com/@adidaskorea"}>
                <img
                  src={`${process.env.PUBLIC_URL}/youtube.png`}
                  alt="youtube"
                />
              </Link>
            </li>
          </li>
        </ul>
      </div>
      <div className="copyLiter">
        <span>
          아디다스코리아(유) | 서울특별시 서초구 서초대로 74길 4, 삼성생명
          서초타워 23층 (06620) | 대표자: 곽근엽 | 사업자 등록번호: 214-81-07412
          | 통신판매업신고: 2007-서울서초-10391 | 개인정보관리책임자: 장영태 |
          호스팅서비스사업자: 아디다스코리아(유) | 고객센터: 1588-8241 | 이메일:
          service@onlineshop.adidas.co.kr
        </span>
      </div>
      <div className="informationBox">
        <ul className="information">
          <li>
            <Link to={"/"}>쿠키 설정</Link>
          </li>
          <li>|</li>
          <li>
            <Link to={"/"}>구매 이용약관</Link>
          </li>
          <li>|</li>
          <li>
            <Link to={"/"}>개인정보 처리방침</Link>
          </li>
          <li>|</li>
          <li>
            <Link to={"/"}>아디클럽 이용약관</Link>
          </li>
          <li>|</li>
          <li>
            <Link to={"/"}>사업자정보</Link>
          </li>
          <li>|</li>
          <li>
            <Link to={"/"}>공정거래 자율준수</Link>
          </li>
          <li>|</li>
          <li>
            <Link to={"/"}>채무지급보증안내</Link>
          </li>
        </ul>
        <span className="copyInfor">
          &copy; adidas Korea. LLC.All Rights Reserved{" "}
        </span>
      </div>
    </>
  );
};

export default Footer;
