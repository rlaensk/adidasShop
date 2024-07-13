import "../componentCss/Main.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../componentCss/MainItem.css";
import MainItem from "./MainItem";
import "../componentCss/MainItem.css";
import Mainslider from "./MainSlider";
import MainEvent from "./MainEvent";
const Main = () => {
  return (
    <>
      <Mainslider />
      <div className="MainWrap">
        <MainItem />
        <MainEvent />
      </div>
    </>
  );
};

export default Main;
