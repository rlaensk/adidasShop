import JoinEvent from "./JoinEvent.js";
import "./../componentCss/membership.css";

const Membership = () => {
  return (
    <>
      <div className="MemberspipBox">
        <h2>지금 멤버십 가입하고 10% 할인 혜택 받으세요.</h2>
        <p>*이메일 수신동의자에 한해 10% 할인쿠폰 발급</p>
        <JoinEvent index={0} imgName="arrowW.png" />
      </div>
    </>
  );
};

export default Membership;
