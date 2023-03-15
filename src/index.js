import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
//渲染出app.js，也就是其中的html內容
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
