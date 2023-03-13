import React, { useState } from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input className="input" onChange={inputHandler} type="text" />
      <button onClick={search}>Search</button>
    </div>
    // <div className="logreg-box">
    //   <div className="form-box login">
    //     <div className="input-box">
    //       <input
    //         className="input"
    //         onChange={inputHandler}
    //         type="text"
    //         required
    //       />
    //       <label for="exampleInputEmail1">輸入字詞尋找圖片</label>
    //     </div>
    //     <button className="loginBtn" onClick={search}>
    //       Search
    //     </button>
    //   </div>
    // </div>
  );
};

export default Search;
