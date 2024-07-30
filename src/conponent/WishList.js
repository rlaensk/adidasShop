import "./../componentCss/wishList.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteItemForBest, deleteItemForSale } from "../store/store";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);

  const dispatch = useDispatch();
  const itemDelete = (id) => {
    // 위시리스트에서 해당 아이템을 제거합니다.
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);

    // 로컬 스토리지를 업데이트합니다.
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // Redux 스토어에서도 삭제합니다. (sale, best 여부에 따라 다른 액션 디스패치)
    const item = wishlist.find((item) => item.id === id);
    if (item) {
      if (item.listType === "sale") {
        dispatch(deleteItemForSale(id));
      } else if (item.listType === "best") {
        dispatch(deleteItemForBest(id));
      }
    }
  };

  useEffect(() => {
    const storedWishList = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishList);
  }, []);
  return (
    <>
      <div className="wishListWarp">
        <div className="wishListBox">
          <div className="wishListTitle">
            <h3>나의 관심 목록</h3>
            <div className="wishListCount">
              총 {wishlist.length}개 관심 상품
            </div>
          </div>
          <div className="wishListItemwrap">
            <Container>
              <Row className="itemBox">
                {wishlist.map((item, index) => (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={index}
                    className="itemImgBox"
                  >
                    <div className="itemImg">
                      <img
                        src={`${process.env.PUBLIC_URL}${item.url}`}
                        alt="wishListItem"
                      />
                      <img
                        src={`${process.env.PUBLIC_URL}/wishList.png`}
                        alt="wishlistDelete"
                        className="wishlistDelete"
                        onClick={() => {
                          itemDelete(item.id);
                        }}
                      />
                      <div className="wishlistPrice">{item.price}</div>
                    </div>

                    <div className="wishlistTitle">{item.title}</div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
