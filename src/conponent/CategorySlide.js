import { Link } from "react-router-dom";
import "./../componentCss/categoryCss.css";

const CategoryMen = () => {
  return (
    <div className="categorySlide">
      <ul className="menCategory categorySubject">
        <li className="menChild categoryChild">
          <h4>남성</h4>
          <ul>
            <li>
              <Link to={"/"}>베스트셀러</Link>
            </li>
            <li>
              <Link to={"/"}>신상품</Link>
            </li>
            <li>
              <Link to={"/"}>Y-3 Collection</Link>
            </li>
            <li>
              <Link to={"/"}>SEOUL</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>SPECIAL DROP</Link>
            </li>
            <li>
              <Link to={"/"}>Only at adidas</Link>
            </li>
            <li>
              <Link to={"/"}>MEMBERS EXCLUSIVES</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>ULTRABOOST 5X</Link>
              <img
                src={`${process.env.PUBLIC_URL}/category1.avif`}
                alt="ULTRABOOST"
              />
            </li>
            <li>
              <Link to={"/"}></Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>신발</h4>
          <ul>
            <li>
              <Link to={"/"}>오리지널스</Link>
            </li>
            <li>
              <Link to={"/"}>러닝</Link>
            </li>
            <li>
              <Link to={"/"}>아웃도어</Link>
            </li>
            <li>
              <Link to={"/"}>트레이닝</Link>
            </li>
            <li>
              <Link to={"/"}>축구</Link>
            </li>
            <li>
              <Link to={"/"}>농구</Link>
            </li>
            <li>
              <Link to={"/"}>슬리퍼 / 샌들</Link>
            </li>
            <li>
              <Link to={"/"}>테니스</Link>
            </li>
            <li>
              <Link to={"/"}>골프</Link>
            </li>
            <li>
              <Link to={"/"}>스포츠웨어</Link>
            </li>
            <li>
              <Link to={"/"}>스케이트보딩</Link>
            </li>
            <li>
              <Link to={"/"}>8만원 이하 제품</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>의류</h4>
          <ul>
            <li>
              <Link to={"/"}>자켓</Link>
            </li>
            <li>
              <Link to={"/"}>축구 저지</Link>
            </li>
            <li>
              <Link to={"/"}>후디 / 스웨트셔츠</Link>
            </li>
            <li>
              <Link to={"/"}>티셔츠</Link>
            </li>
            <li>
              <Link to={"/"}>티랙수트 / 트랙탑</Link>
            </li>
            <li>
              <Link to={"/"}>스포츠웨어</Link>
            </li>
            <li>
              <Link to={"/"}>팬츠</Link>
            </li>
            <li>
              <Link to={"/"}>반바지</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>용품</h4>
          <ul>
            <li>
              <Link to={"/"}>양말</Link>
            </li>
            <li>
              <Link to={"/"}>모자</Link>
            </li>
            <li>
              <Link to={"/"}>가방</Link>
            </li>
            <li>
              <Link to={"/"}>공</Link>
            </li>
            <li>
              <Link to={"/"}>장갑 / 스카프</Link>
            </li>
            <li>
              <Link to={"/"}>벨트</Link>
            </li>
            <li>
              <Link to={"/"}>헤드폰</Link>
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <h4>스포츠</h4>
          <ul>
            <li>
              <Link to={"/"}>러닝</Link>
            </li>
            <li>
              <Link to={"/"}>아웃도어</Link>
            </li>
            <li>
              <Link to={"/"}>트레이닝</Link>
            </li>
            <li>
              <Link to={"/"}>축구</Link>
            </li>
            <li>
              <Link to={"/"}>농구</Link>
            </li>
            <li>
              <Link to={"/"}>테니스</Link>
            </li>
            <li>
              <Link to={"/"}>골프</Link>
            </li>
            <li>
              <Link to={"/"}>스케이트보딩</Link>
            </li>
            <li>
              <Link to={"/"}>수영</Link>
            </li>
            <li>
              <Link to={"/"}>사이클링</Link>
            </li>
            <li>
              <Link to={"/"}>야구</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="menAll">
        <ul>
          <li className="menAllSee">
            <Link to={"/"}>남성 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>남성신발 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>남성의류 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>남성용품 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>스포츠 전체보기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
const CategoryWomen = () => {
  return (
    <div className="categorySlide">
      <ul className="womenCategory categorySubject">
        <li className="womenChild categoryChild">
          <h4>여성</h4>
          <ul>
            <li>
              <Link to={"/"}>베스트셀러</Link>
            </li>
            <li>
              <Link to={"/"}>신상품</Link>
            </li>
            <li>
              <Link to={"/"}>Y-3 Collection</Link>
            </li>
            <li>
              <Link to={"/"}>SEOUL</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>SPECIAL DROP</Link>
            </li>
            <li>
              <Link to={"/"}>Only at adidas</Link>
            </li>
            <li>
              <Link to={"/"}>MEMBERS EXCLUSIVES</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>ULTRABOOST 5X</Link>
              <img
                src={`${process.env.PUBLIC_URL}/category1.avif`}
                alt="ULTRABOOST"
              />
            </li>
            <li>
              <Link to={"/"}></Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>신발</h4>
          <ul>
            <li>
              <Link to={"/"}>오리지널스</Link>
            </li>
            <li>
              <Link to={"/"}>러닝</Link>
            </li>
            <li>
              <Link to={"/"}>아웃도어</Link>
            </li>
            <li>
              <Link to={"/"}>트레이닝</Link>
            </li>
            <li>
              <Link to={"/"}>축구</Link>
            </li>
            <li>
              <Link to={"/"}>농구</Link>
            </li>
            <li>
              <Link to={"/"}>슬리퍼 / 샌들</Link>
            </li>
            <li>
              <Link to={"/"}>테니스</Link>
            </li>
            <li>
              <Link to={"/"}>골프</Link>
            </li>
            <li>
              <Link to={"/"}>스포츠웨어</Link>
            </li>
            <li>
              <Link to={"/"}>스케이트보딩</Link>
            </li>
            <li>
              <Link to={"/"}>8만원 이하 제품</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>의류</h4>
          <ul>
            <li>
              <Link to={"/"}>자켓</Link>
            </li>
            <li>
              <Link to={"/"}>후디 / 스웨트셔츠</Link>
            </li>
            <li>
              <Link to={"/"}>티셔츠</Link>
            </li>
            <li>
              <Link to={"/"}>티랙수트 / 트랙탑</Link>
            </li>
            <li>
              <Link to={"/"}>스포츠웨어</Link>
            </li>
            <li>
              <Link to={"/"}>스포츠브라</Link>
            </li>
            <li>
              <Link to={"/"}>팬츠</Link>
            </li>
            <li>
              <Link to={"/"}>레깅스</Link>
            </li>
            <li>
              <Link to={"/"}>반바지 / 숏팬츠</Link>
            </li>
            <li>
              <Link to={"/"}>스커트</Link>
            </li>
            <li>
              <Link to={"/"}>원피스</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>용품</h4>
          <ul>
            <li>
              <Link to={"/"}>양말</Link>
            </li>
            <li>
              <Link to={"/"}>모자</Link>
            </li>
            <li>
              <Link to={"/"}>가방</Link>
            </li>
            <li>
              <Link to={"/"}>공</Link>
            </li>
            <li>
              <Link to={"/"}>장갑 / 스카프</Link>
            </li>
            <li>
              <Link to={"/"}>벨트</Link>
            </li>
            <li>
              <Link to={"/"}>헤드폰</Link>
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <h4>스포츠</h4>
          <ul>
            <li>
              <Link to={"/"}>러닝</Link>
            </li>
            <li>
              <Link to={"/"}>아웃도어</Link>
            </li>
            <li>
              <Link to={"/"}>트레이닝</Link>
            </li>
            <li>
              <Link to={"/"}>요가</Link>
            </li>
            <li>
              <Link to={"/"}>축구</Link>
            </li>
            <li>
              <Link to={"/"}>농구</Link>
            </li>
            <li>
              <Link to={"/"}>테니스</Link>
            </li>
            <li>
              <Link to={"/"}>골프</Link>
            </li>
            <li>
              <Link to={"/"}>스케이트보딩</Link>
            </li>
            <li>
              <Link to={"/"}>수영</Link>
            </li>
            <li>
              <Link to={"/"}>사이클링</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="menAll">
        <ul>
          <li className="menAllSee">
            <Link to={"/"}>여성 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>여성신발 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>여성의류 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>여성용품 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>스포츠 전체보기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
const CategoryKids = () => {
  return (
    <div className="categorySlide">
      <ul className="kidsCategory categorySubject">
        <li className="kidsChild categoryChild">
          <h4>키즈</h4>
          <ul>
            <li>
              <Link to={"/"}>Only at adidas</Link>
            </li>
            <li>
              <Link to={"/"}>MEMBERS EXCLUSIVES</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>아디다스 블로그</Link>
            </li>
            <li></li>
            <li className="kidsALink">
              <Link to={"/"}>
                <img
                  src={`${process.env.PUBLIC_URL}/categoryLogo.avif`}
                  alt="ORIGINALS"
                />
              </Link>
              <img
                src={`${process.env.PUBLIC_URL}/category2.avif`}
                alt="ORIGNALS"
              />
            </li>
            <li>
              <Link to={"/"}></Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>신발</h4>
          <ul>
            <li>
              <Link to={"/"}>인펀트 [110 - 160mm]</Link>
            </li>
            <li>
              <Link to={"/"}>키즈 [170 - 215mm]</Link>
            </li>
            <li>
              <Link to={"/"}>주니어 [220 - 245mm]</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>의류</h4>
          <ul>
            <li>
              <Link to={"/"}>상의</Link>
            </li>
            <li>
              <Link to={"/"}>하의</Link>
            </li>
            <li>
              <Link to={"/"}>트랙수트</Link>
            </li>
            <li>
              <Link to={"/"}>레깅스</Link>
            </li>
            <li>
              <Link to={"/"}>스커트 / 드레스</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>용품</h4>
          <ul>
            <li>
              <Link to={"/"}>가방</Link>
            </li>
            <li>
              <Link to={"/"}>모자</Link>
            </li>
            <li>
              <Link to={"/"}>양말</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>컬렉션</h4>
          <ul>
            <li>
              <Link to={"/"}>레고</Link>
            </li>
            <li>
              <Link to={"/"}>슈퍼스타</Link>
            </li>
            <li>
              <Link to={"/"}>스탠스미스</Link>
            </li>
            <li>
              <Link to={"/"}>키즈 골프화</Link>
            </li>
            <li>
              <Link to={"/"}>스포츠웨어</Link>
            </li>
            <li>
              <Link to={"/"}>슬라이드 / 샌들</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="menAll">
        <ul>
          <li className="menAllSee">
            <Link to={"/"}>키즈 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>신발 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>의류 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>용품 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>키즈 전체보기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
const CategorySports = () => {
  return (
    <div className="categorySlide">
      <ul className="sportsCategory categorySubject">
        <li className="sportsChild categoryChild">
          <h4>러닝</h4>
          <ul>
            <li className="sportsLiImg">
              <Link to={"/"}>
                <img
                  src={`${process.env.PUBLIC_URL}/category3-1.avif`}
                  alt="ruuning"
                />
              </Link>
            </li>
            <li>
              <Link to={"/"}>러닝 베스트 셀러</Link>
            </li>
            <li>
              <Link to={"/"}>신발</Link>
            </li>
            <li>
              <Link to={"/"}>의류</Link>
            </li>
            <li>
              <Link to={"/"}>용품</Link>
            </li>

            <li></li>
            <li>
              <Link to={"/"}>아디제로</Link>
            </li>
            <li>
              <Link to={"/"}>슈퍼노바</Link>
            </li>
            <li>
              <Link to={"/"}>4DFWD</Link>
            </li>
            <li>
              <Link to={"/"}>울트라부스트</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>adidas Runners</Link>
            </li>
            <li>
              <Link to={"/"}>나에게 맞는 러닝 슈즈 찾기</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>트레이닝</h4>
          <ul>
            <li className="sportsLiImg">
              <Link to={"/"}>
                <img
                  src={`${process.env.PUBLIC_URL}/category3-2.avif`}
                  alt="Training"
                />
              </Link>
            </li>
            <li>
              <Link to={"/"}>트레이닝 베스트 셀러</Link>
            </li>
            <li>
              <Link to={"/"}>신발</Link>
            </li>
            <li>
              <Link to={"/"}>의류</Link>
            </li>
            <li>
              <Link to={"/"}>용품</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>나에게 맞는 스포츠 브라 찾기</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>아웃도어</h4>
          <ul>
            <li className="sportsLiImg">
              <Link to={"/"}>
                <img
                  src={`${process.env.PUBLIC_URL}/category3-3.avif`}
                  alt="shose"
                />
              </Link>
            </li>
            <li>
              <Link to={"/"}>신발</Link>
            </li>
            <li>
              <Link to={"/"}>의류</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>축구</h4>
          <ul>
            <li className="sportsLiImg">
              <Link to={"/"}>
                <img
                  src={`${process.env.PUBLIC_URL}/category3-4.avif`}
                  alt="soccer"
                />
              </Link>
            </li>
            <li>
              <Link to={"/"}>축구 베스트 셀러</Link>
            </li>
            <li>
              <Link to={"/"}>신발</Link>
            </li>
            <li>
              <Link to={"/"}>클럽 저지</Link>
            </li>
            <li>
              <Link to={"/"}>국개대표 저지</Link>
            </li>
            <li>
              <Link to={"/"}>의류</Link>
            </li>
            <li>
              <Link to={"/"}>용품</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>F50</Link>
            </li>
            <li>
              <Link to={"/"}>프레데터</Link>
            </li>
            <li>
              <Link to={"/"}>코파</Link>
            </li>
            <li>
              <Link to={"/"}>X</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>골프</h4>
          <ul>
            <li className="sportsLiImg">
              <Link to={"/"}>
                <img
                  src={`${process.env.PUBLIC_URL}/category3-5.avif`}
                  alt="GOLF"
                />
              </Link>
            </li>
            <li>
              <Link to={"/"}>신발</Link>
            </li>
            <li>
              <Link to={"/"}>의류</Link>
            </li>
            <li>
              <Link to={"/"}>용품</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>투어 360</Link>
            </li>
            <li>
              <Link to={"/"}>코드케이오스</Link>
            </li>
            <li>
              <Link to={"/"}>ZG23</Link>
            </li>
            <li>
              <Link to={"/"}>얼티밋365</Link>
            </li>
            <li>
              <Link to={"/"}>아디크로스</Link>
            </li>
            <li>
              <Link to={"/"}>/// 컬렉션</Link>
            </li>
            <li>
              <Link to={"/"}>고투</Link>
            </li>
            <li>
              <Link to={"/"}>플레이그린</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>기타 스포츠</h4>
          <ul>
            <li>
              <Link to={"/"}>요가</Link>
            </li>
            <li>
              <Link to={"/"}>테니스</Link>
            </li>
            <li>
              <Link to={"/"}>농구</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>스케이트보딩</Link>
            </li>
            <li>
              <Link to={"/"}>수영</Link>
            </li>
            <li>
              <Link to={"/"}>사이클링</Link>
            </li>
            <li>
              <Link to={"/"}>야구</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="menAll">
        <ul>
          <li className="menAllSee">
            <Link to={"/"}>러닝 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>트레이닝 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>아웃도어 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>축구 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>골프 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>스포츠 전체보기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
const CategoryBrands = () => {
  return (
    <div className="categorySlide">
      <ul className="brandCategory categorySubject">
        <li className="brandChild categoryChild">
          <ul>
            <li className="brandImg">
              <Link to={"/"}>
                <img
                  src={`${process.env.PUBLIC_URL}/category4-1.avif`}
                  alt="orignals"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/category4-1-1.avif`}
                  alt="adidas sportswear"
                />
              </Link>
            </li>
            <li>
              <Link to={"/"}>오리지널스 베스트 셀러</Link>
            </li>
            <li>
              <Link to={"/"}>신발</Link>
            </li>
            <li>
              <Link to={"/"}>의류</Link>
            </li>
            <li>
              <Link to={"/"}>용품</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>가젤</Link>
            </li>
            <li>
              <Link to={"/"}>삼바</Link>
            </li>
            <li>
              <Link to={"/"}>슈퍼스타</Link>
            </li>
            <li>
              <Link to={"/"}>스탠스미스</Link>
            </li>
            <li>
              <Link to={"/"}>포럼</Link>
            </li>{" "}
            <li>
              <Link to={"/"}>캠퍼스</Link>
            </li>
            <li>
              <Link to={"/"}>Confirmed 발매</Link>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="brandImg">
              <Link to={"/"}>
                <img
                  src={`${process.env.PUBLIC_URL}/category4-2.avif`}
                  alt="orignals"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/category4-2-2.avif`}
                  alt="adidas sportswear"
                />
              </Link>
            </li>
            <li>
              <Link to={"/"}>스포츠웨어 베스트셀러</Link>
            </li>
            <li>
              <Link to={"/"}>남성 의류</Link>
            </li>
            <li>
              <Link to={"/"}>여성 의류</Link>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="brandImg">
              <Link to={"/"}>
                <img
                  src={`${process.env.PUBLIC_URL}/category4-3.avif`}
                  alt="orignals"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/category4-3-3.avif`}
                  alt="adidas sportswear"
                />
              </Link>
            </li>

            <li>
              <Link to={"/"}>신발</Link>
            </li>

            <li>
              <Link to={"/"}>의류</Link>
            </li>
            <li>
              <Link to={"/"}>용품</Link>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="brandImg">
              <Link to={"/"}>
                <img
                  src={`${process.env.PUBLIC_URL}/category4-4.avif`}
                  alt="soccer"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/category4-4-4.avif`}
                  alt="soccer"
                />
              </Link>
            </li>

            <li>
              <Link to={"/"}>신발</Link>
            </li>

            <li>
              <Link to={"/"}>의류</Link>
            </li>
            <li>
              <Link to={"/"}>용품</Link>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="brandImg">
              <Link to={"/"}>
                <img
                  src={`${process.env.PUBLIC_URL}/category4-5.avif`}
                  alt="soccer"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/category4-5-5.avif`}
                  alt="soccer"
                />
              </Link>
            </li>

            <li>
              <Link to={"/"}>신발</Link>
            </li>
            <li>
              <Link to={"/"}>의류</Link>
            </li>
            <li>
              <Link to={"/"}>용품</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>트레이닝</Link>
            </li>
            <li>
              <Link to={"/"}>러닝</Link>
            </li>
            <li>
              <Link to={"/"}>라이프 스타일</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="menAll">
        <ul>
          <li className="menAllSee">
            <Link to={"/"}>러닝 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>트레이닝 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>아웃도어 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>축구 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>골프 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>스포츠 전체보기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const CategoryOnlineOutlet = () => {
  return (
    <div className="categorySlide outletSlide">
      <ul className=" outletCategory categorySubject">
        <li className=" outletChild categoryChild">
          <h4>SPECLAL OFFER</h4>
          <ul>
            <li>
              <Link to={"/"}>
                <img
                  className="outletImg"
                  src={`${process.env.PUBLIC_URL}/outletsale.avif`}
                  alt="onlineOutlet"
                />
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>남성</h4>
          <ul>
            <li>
              <Link to={"/"}>신발</Link>
            </li>
            <li>
              <Link to={"/"}>의류</Link>
            </li>
            <li>
              <Link to={"/"}>용품</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>러닝</Link>
            </li>
            <li>
              <Link to={"/"}>트레이닝</Link>
            </li>
            <li>
              <Link to={"/"}>축구</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>여성</h4>
          <ul>
            <li>
              <Link to={"/"}>신발</Link>
            </li>
            <li>
              <Link to={"/"}>의류</Link>
            </li>
            <li>
              <Link to={"/"}>용품</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>러닝</Link>
            </li>
            <li>
              <Link to={"/"}>트레이닝</Link>
            </li>
            <li>
              <Link to={"/"}>축구</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>키즈</h4>
          <ul>
            <li>
              <Link to={"/"}>신발</Link>
            </li>
            <li>
              <Link to={"/"}>의류</Link>
            </li>
            <li>
              <Link to={"/"}>용품</Link>
            </li>
            <li></li>
            <li>
              <Link to={"/"}>오리지널스</Link>
            </li>
            <li>
              <Link to={"/"}>스포츠웨어</Link>
            </li>
          </ul>
        </li>
        <li>
          <h4>ONLINE OUTLET</h4>
          <ul>
            <li>
              <Link to={"/"}>~30% 할인</Link>
            </li>
            <li>
              <Link to={"/"}>30~40% 할인</Link>
            </li>
            <li>
              <Link to={"/"}>40~50% 할인</Link>
            </li>
            <li>
              <Link to={"/"}>50% 할인</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className="menAll">
        <ul>
          <li className="menAllSee">
            <Link to={"/"}>전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>남성 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>여성 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>키즈 전체보기</Link>
          </li>
          <li>
            <Link to={"/"}>OUTLET 전체보기</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export {
  CategoryMen,
  CategoryWomen,
  CategoryKids,
  CategorySports,
  CategoryBrands,
  CategoryOnlineOutlet,
};
