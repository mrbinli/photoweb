// eslint-disable-next-line
import React, { useState } from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <div className="logreg-box">
        <div className="form-box login">
          <div className="input-box">
            <input className="input" onChange={inputHandler} type="text" />
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
