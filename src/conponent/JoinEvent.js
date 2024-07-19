import { useDispatch, useSelector } from "react-redux";
import { clickbtn, toggleAnimation } from "../store/btnClickSlice";
import { Link } from "react-router-dom";

const JoinEvent = () => {
  const clickbtn = useSelector((state) => state.clickbtn) || [];
  const dispatch = useDispatch();

  const handleButtonClick = (index) => {
    dispatch(toggleAnimation(index));
  };

  return (
    <>
      <div
        className={`btnBox flex ${clickbtn[0] ? "animation" : ""}`}
        onClick={() => handleButtonClick(0)}
      >
        <Link className=" flex" to={"/"}>
          자세히 보기
          <img src="./arrow.png" alt="seemore" />
        </Link>
      </div>
    </>
  );
};

export default JoinEvent;
