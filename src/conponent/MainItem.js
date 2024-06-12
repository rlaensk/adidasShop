import React, { useState } from "react";

import "../componentCss/MainItem.css";

const MainItem = () => {
  const [clickBtn, setClickBtn] = useState([false, false, false, false]);

  const btnClick = (index) => {
    set;
  };

  return (
    <div className="MainItemBox flex">
      <div className="buttonMenu">
        <ul className="btnList flex">
          <li onClick={btnClick}>FOOTBALL HERITAGE ⚽</li>
          <li onClick={btnClick}>COMFY SNEAKERS 👟</li>
          <li onClick={btnClick}>FESTIVAL STYLING ✨</li>
          <li onClick={btnClick}>TRACK PANTS 🎇</li>
        </ul>
      </div>
    </div>
  );
};

export default MainItem;
