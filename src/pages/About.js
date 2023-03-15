import React from "react";

const About = () => {
  return (
    <div className="about" style={{ minHeight: "85.3vh" }}>
      <h3>React, API, SCSS</h3>
      <p>歡迎來到這個網站</p>
      <p>這個網站以react框架製作</p>
      <p>連接pexels的API實現圖片牆的功能</p>
      <p>並且以SCSS改善UI介面</p>
      <p>可以從圖片的資訊連結到原作者</p>
      <p>請享受這個網站！</p>
      <div className="link">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.cakeresume.com/s--W81v9NUdEd8pWQcTOx00sw--/mrbinli"
        >
          <img src="link_icon.svg" alt="履歷" />
        </a>
        <a href="">
          <img src="github_icon.svg" alt="Github" />
        </a>
      </div>
    </div>
  );
};

export default About;
