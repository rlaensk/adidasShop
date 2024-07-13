import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./conponent/Header";
import Main from "./conponent/Main";
import { Detail } from "./conponent/Detail";
import "./componentCss/detail.css";
import "./componentCss/MainEvent.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/saleMan" element={<div>SALE 남자상품</div>} />
        <Route path="/detail" element={<Detail />} />
        {/* 추가적인 라우트를 여기에 정의할 수 있습니다 */}
      </Routes>
    </div>
  );
}

export default App;
