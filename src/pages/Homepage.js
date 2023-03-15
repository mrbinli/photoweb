import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";
import { v4 as uuidv4 } from "uuid";

const Homepage = () => {
  //下面的資料一路到return前都是要給picture和search的
  let [input, setInput] = useState("");
  //圖片資料 一開始都沒有
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = process.env.REACT_APP_SERVER_API;
  const initialURL = "/api/curated?page=1&per_page=20";
  let searchURL = "/api/search?query=${input}&per_page=15&per_page=1";

  const search = async (url) => {
    //藉由axios去向pexels拿到領取圖片的連結"initialURL"，並且要附上金鑰
    //固定格式就是{headers: { Authorization: auth },}
    let result = await axios.get(url, {
      headers: {
        Authorization: auth,
      },
    });
    // console.log(result) 確認拿到的資料的格式
    //將data改為setData並且附上result中資料的data.photos
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  const morePiture = async () => {
    let newURL;
    setPage(page + 1);
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&per_page=1`;
    }
    let result = await axios.get(newURL, {
      headers: {
        Authorization: auth,
      },
    });
    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    // eslint-disable-next-line
    search(initialURL), [];
  });

  //search中的函式是prop
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return (
              <div key={d.uuid}>
                <Picture data={d} />
              </div>
            );
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePiture}>更多圖片</button>
      </div>
    </div>
  );
  // minHight: "100vh" 代表導覽列跟尾端一定有100vh的高度
};

export default Homepage;
