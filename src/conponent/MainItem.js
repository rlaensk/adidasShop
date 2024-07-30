import React from "react";
import "../componentCss/MainItem.css";
import "../componentCss/Sale.css";
import "../componentCss/reset.css";
import ButtonMenu from "./ButtonMenu.js";

const MainItem = () => {
  return (
    <div className="MainItemBox flex">
      <ButtonMenu />
    </div>
  );
};

export default MainItem;
