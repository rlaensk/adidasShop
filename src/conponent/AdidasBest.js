import React, { useState } from "react";
import { best } from "../date/itenm.js";
import "../componentCss/MainItem.css";
import MajorItem, { adidasBest } from "./ItemList.js";
import { Best } from "./ItemList.js";

const AdidasBest = () => {
  const [navlist, setNavlist] = useState({ menu1: true });

  const [selectedMenu, setSelectedMenu] = useState("menu1");

  const menuComponent = {
    menu1: <MajorItem category="best" />,
  };

  return (
    <div className="buttonMenu">
      <ul className="btnList flex">
        {best.map((state, index) => (
          <li key={index} className={` ${navlist[state.id] ? "active" : ""}`}>
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
export default AdidasBest;
