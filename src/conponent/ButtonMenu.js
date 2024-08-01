import React, { useState } from "react";
import { navMenu } from "../date/itenm.js";
import "../componentCss/MainItem.css";
import MajorItem from "./MajorItem.js";

const ButtonMenu = () => {
  const [navlist, setNavlist] = useState({ menu1: true });

  const [selectedMenu, setSelectedMenu] = useState("menu1");

  const menuComponent = {
    menu1: <MajorItem category="upto" />,
    menu2: <MajorItem category="y_3" />,
    menu3: <MajorItem category="last" />,
    menu4: <MajorItem category="comfy" />,
  };
  const btnClick = (id) => {
    setNavlist((menu) => ({
      [id]: !menu[id],
    }));
    setSelectedMenu(id);
  };
  return (
    <div className="buttonMenu">
      <ul className="btnList flex">
        {navMenu.map((state, index) => (
          <li
            key={index}
            onClick={() => btnClick(state.id)}
            className={` ${navlist[state.id] ? "active" : ""}`}
          >
            {state.title}
          </li>
        ))}
      </ul>
      <div className="eventItemBox">
        {selectedMenu && menuComponent[selectedMenu]}
      </div>
    </div>
  );
};
export default ButtonMenu;
