import "../componentCss/Main.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../componentCss/MainItem.css";
import MainItem from "./MainItem";
import "../componentCss/MainItem.css";
import Mainslider from "./MainSlider";
const Main = () => {
  return (
    <>
      <Mainslider />
      <div className="MainWrap">
        <MainItem />
      </div>
    </>
  );
};

export default Main;
