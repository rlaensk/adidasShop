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
import Membership from "./Membership";
import Footer from "./Footer";

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
      </div>
      <Membership />
    </>
  );
};

export default Main;
