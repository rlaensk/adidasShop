import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./conponent/Header";
import Main from "./conponent/Main";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/saleMan" element={<div>SALE 남자상품</div>} />
        {/* 추가적인 라우트를 여기에 정의할 수 있습니다 */}
      </Routes>
    </div>
  );
}

export default App;
