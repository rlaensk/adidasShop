import { product } from "../date/itenm.js"; // 수정된 파일명
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clickHart, deleteItem } from "./../store/hartClick.js"; // actions import 추가

const MajorItem = ({ category }) => {
  const filterProducts = product.filter((item) => item.iscategory === category);
  const hartClick = useSelector((state) => state.items);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event, item) => {
    event.stopPropagation();
    dispatch(clickHart({ category, id: item.id }));

    const wishlistItem = {
      id: item.id,
      title: item.title,
      price: item.price,
      url: item.url,
    };
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.find((w) => w.id === item.id)) {
      wishlist.push(wishlistItem);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  const handleNavigate = (id) => {
    navigate(`/detail/${id}`);
  };

  const itemDelete = (id) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    dispatch(deleteItem({ category, id }));
  };

  return (
    <div className="hiddenBox">
      <div className="flex itemBox">
        {filterProducts.map((item, index) => {
          const isClicked = hartClick[category]?.find(
            (h) => h.id === item.id
          )?.clicked;
          return (
            <div
              onClick={() => handleNavigate(item.id)}
              key={index}
              className="flex itemdiv"
            >
              <div className="imgBox">
                <img src={`${process.env.PUBLIC_URL}${item.url}`} alt="item" />
                <img
                  onClick={(event) => handleClick(event, item)}
                  className="wishlist"
                  src={`${process.env.PUBLIC_URL}/wishList${
                    isClicked ? "B" : ""
                  }.png`}
                  alt="wishlist"
                />
                <p className="price">{item.price}</p>
              </div>
              <div className="textBox">
                <p className="titleText">{item.title}</p>
                <p className="categoryText">{item.category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MajorItem;
