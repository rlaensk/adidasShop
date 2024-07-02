import { upTo, y3, last, comfy } from "../date/itenm.js";
import React, { useState } from "react";

import { Link } from "react-router-dom";

const UpTo = () => {
  const [hartClick, setHartClick] = useState(false);

  const wishlist = () => {
    setHartClick(!hartClick);
  };

  return (
    <div className="hiddenBox">
      <div className="flex itemBox">
        {upTo.map((state, index) => (
          <Link to={"/detail"} key={index} className="flex itemLink">
            <div className="imgBox">
              <img src={`${process.env.PUBLIC_URL}${state.url}`} alt="itme" />
              <img
                onClick={() => {
                  wishlist();
                }}
                className="wishlist"
                src={` ${process.env.PUBLIC_URL}/hart${
                  hartClick ? "White" : "Red"
                }.png`}
                alt="wishlist"
              />
              <p className="price">{state.price}</p>
            </div>
            <div className="textBox">
              <p className="titleText">{state.title}</p>
              <p className="categoryText">{state.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
const Y_3 = () => {
  return (
    <div className="hiddenBox">
      <div className="flex itemBox">
        {y3.map((state, index) => (
          <Link to={"/detail"} key={index} className="flex itemLink">
            <div className="imgBox">
              <img src={`${process.env.PUBLIC_URL}${state.url}`} alt="itme" />
              <img
                className="wishlist"
                src={`${process.env.PUBLIC_URL}/hartWhite.png`}
                alt="wishlist"
              />{" "}
              <p className="price">{state.price}</p>
            </div>
            <div className="textBox">
              <p className="titleText">{state.title}</p>
              <p className="categoryText">{state.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
const Last = () => {
  return (
    <div className="hiddenBox">
      <div className="flex itemBox">
        {last.map((state, index) => (
          <Link to={"/detail"} key={index} className="flex itemLink">
            <div className="imgBox">
              <img src={`${process.env.PUBLIC_URL}${state.url}`} alt="itme" />
              <img
                className="wishlist"
                src={`${process.env.PUBLIC_URL}/hartWhite.png`}
                alt="wishlist"
              />{" "}
              <p className="price">{state.price}</p>
            </div>
            <div className="textBox">
              <p className="titleText">{state.title}</p>
              <p className="categoryText">{state.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
const Comfy = () => {
  return (
    <div className="hiddenBox">
      <div className="flex itemBox">
        {comfy.map((state, index) => (
          <Link to={"/"} key={index} className="flex itemLink">
            <div className="imgBox">
              <img src={`${process.env.PUBLIC_URL}${state.url}`} alt="itme" />
              <img
                className="wishlist"
                src={`${process.env.PUBLIC_URL}/hartWhite.png`}
                alt="wishlist"
              />{" "}
              <p className="price">{state.price}</p>
            </div>
            <div className="textBox">
              <p className="titleText">{state.title}</p>
              <p className="categoryText">{state.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export { UpTo, Y_3, Last, Comfy };
