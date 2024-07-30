import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./conponent/Header";
import Main from "./conponent/Main";
import { Detail } from "./conponent/Detail";
import "./componentCss/detail.css";
import "./componentCss/MainEvent.css";
import "./componentCss/Main.css";
import WishList from "./conponent/WishList";
import Footer from "./conponent/Footer";
import MyPage from "./conponent/MyPage";
import Cart from "./conponent/Cart";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/wishList" element={<WishList />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
