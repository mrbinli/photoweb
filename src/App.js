//其他jsx的容器
// import Nav from "./Nav";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import "./style/style.css";

// 得到一些html內容
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
