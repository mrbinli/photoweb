import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="photographer">
        <a target="_blank" rel="noreferrer" href={data.photographer_url}>
          <p>{data.photographer}</p>
        </a>
      </div>
      <div className="imageContainer">
        <a target="_blank" rel="noreferrer" href={data.src.large}>
          <img src={data.src.large} alt="" />
        </a>
      </div>
      <div className="magnifier">
        <a target="_blank" rel="noreferrer" href={data.url}>
          <img src="magnifier.svg" alt="下載圖片" />
        </a>
      </div>
    </div>
  );
};

export default Picture;
