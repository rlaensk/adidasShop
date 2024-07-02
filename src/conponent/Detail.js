import { useEffect, useState } from "react";

const Detail = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // 스크롤 위치

  useEffect(() => {
    const handScroll = () => {
      const currentScrollPosition = window.AbortController.scrollY;
      //특정 스크롤 위치 고정
      if (currentScrollPosition > 120 && currentScrollPosition < 1600) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      //현재 스크롤 위치 저장
      setScrollPosition(currentScrollPosition);
    };
    window.addEventListener("scroll", handScroll);
    return () => {
      window.addEventListener("scroll", handScroll);
    };
  }, []);

  return (
    <div className="detailWrap">
      <div className="detailImg">
        <div className="imgBox1"></div>

        <div className="imgBox2"></div>

        <div className="imgBox3"></div>

        <div className="imgBox4"></div>
      </div>
      <div className={`detailInfo ${isSticky ? "poSticky" : ""}`}>
        <div className="productDetail">
          <div className="catagory">Originals</div>
          <div className="starReview">
            <img src={`${process.env.PUBLIC_URL}/star.PNG`} />
            <p className="ReCount">10</p>
          </div>
        </div>
        <div className="itemName">베이스볼 클래스 트레포일 캡</div>
        <div className="price">35,000원</div>
      </div>
    </div>
  );
};

export default Detail;
