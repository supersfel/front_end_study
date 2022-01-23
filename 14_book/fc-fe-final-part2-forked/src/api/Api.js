import React from "react";
import axios from "axios";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: "KakaoAK {322b7973963cb5bfd4eec4b5008361e7}"
  }
});

export const bookSearch = (params) => {
  console.log(Kakao.get("/v3/search/book", { params }));
  return Kakao.get("/v3/search/book HTTP/1.1", { params });
};

function Api() {
  bookSearch();
  return <div></div>;
}

export default Api;
