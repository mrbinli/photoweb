// eslint-disable-next-line
import React, { useState } from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      // 在這裡處理 Enter 鍵被按下時的事件
      search();
    }
  }
  return (
    <div className="search">
      {/* <input className="input" onChange={inputHandler} type="text" />
      <button onClick={search}>Search</button> */}
      <div className="logreg-box">
        <div className="form-box login">
          <div className="input-box">
            <input
              className="input"
              onChange={inputHandler}
              onKeyDown={handleKeyDown}
              type="text"
              required
            />
            <label htmlFor="exampleInputEmail1">請用英文單字查詢</label>
          </div>
          <button className="loginBtn" onClick={search}>
            <img src="magnifier.svg" alt="Search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
