import axios from "axios";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: "KakaoAK 612f439682009692a8ebda3ccf67816b"
  }
});

// search book api
export const bookSearch = (params) => {
  return Kakao.get("/v3/search/book", { params });
};
