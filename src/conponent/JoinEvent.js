import { useDispatch, useSelector } from "react-redux";
import {
  toggleAnimation,
  toggleAnimationDelayed,
} from "../store/btnClickSlice";
import "../componentCss/Main.css";
import { Link } from "react-router-dom";

const JoinEvent = ({ index, imgName }) => {
  const clickBtn = useSelector((state) => state.clickBtn) || [];
  const dispatch = useDispatch();

  const handleButtonClick = (index) => {
    dispatch(toggleAnimation(index));
    setTimeout(() => {
      dispatch(toggleAnimationDelayed(index));
    }, 1000);
  };

  console.log(clickBtn);
  if (!clickBtn[index]) {
    return null; // 해당 인덱스가 존재하지 않을 경우 아무것도 렌더링하지 않습니다.
  }

  return (
    <>
      <div
        className={`btnBox flex ${clickBtn[index].className}`}
        onClick={() => handleButtonClick(index)}
      >
        <Link className=" flex" to={"/"}>
          자세히 보기
          <img src={`./${imgName}`} alt="seemore" />
        </Link>
      </div>

      <div className="backBox"></div>
    </>
  );
};

export default JoinEvent;
