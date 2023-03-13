import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="photographer">
        <p>{data.photographer}</p>
      </div>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <div className="magnifier">
        <a target="_blank" href={data.src.large}>
          {" "}
          <img src="magnifier.svg" alt="下載圖片" />
        </a>
      </div>
    </div>
  );
};

export default Picture;
