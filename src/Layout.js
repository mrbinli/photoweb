import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/about">關於這個網站</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};
//Outlet會因為改變網址而改變 也就是變成Route中的Route指向的地方
//可以想像成是上面的部分為導覽列 下面的就是outlet，而outlet會因選擇改變

export default Layout;
