import "../componentCss/Main.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../componentCss/MainItem.css";
import MainItem from "./MainItem";
import "../componentCss/Main.css";
import Mainslider from "./MainSlider";
import MainEvent from "./MainEvent";
import AdidasBest from "./AdidasBest";
import News from "./News";
import "./../componentCss/news.css";
import AboutAdidas from "./AboutAdidas";
import JoinEvent from "./JoinEvent.js";
const Main = () => {
  return (
    <>
      <Mainslider />
      <div className="MainWrap">
        <MainItem />
        <MainEvent />
        <AdidasBest />
        <News />
        <AboutAdidas />
        <JoinEvent />
      </div>
    </>
  );
};

export default Main;
