import React, { useState } from "react";
import Sale from "./Sale";
import "../componentCss/MainItem.css";
import "../componentCss/Sale.css";
import "../componentCss/reset.css";
import { navMenu } from "../date/itenm.js";
import { UpTo, Y_3, Last, Comfy } from "./ItemList.js";

const MainItem = () => {
  const [navlist, setNavlist] = useState({ menu1: true });
  const [selectedMenu, setSelectedMenu] = useState("menu1");

  const menuComponent = {
    menu1: <UpTo />,
    menu2: <Y_3 />,
    menu3: <Last />,
    menu4: <Comfy />,
  };
  const btnClick = (id) => {
    setNavlist((menu) => ({
      [id]: !menu[id],
    }));
    setSelectedMenu(id);
  };

  return (
    <div className="MainItemBox flex">
      {/* <div className="SaleTap">
        <Sale />
      </div> */}
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
      </div>

      <div className="eventItemBox">
        {selectedMenu && menuComponent[selectedMenu]}
      </div>
    </div>
  );
};

export default MainItem;
