import React, { useState } from "react";
import "./css/Book.css";

function Book({ book }) {
  const onclickbook = () => {
    window.open(book.url, "_blank");
  };

  return (
    <div className="bookintro" onClick={onclickbook}>
      <img
        className="thumbnail"
        src={book.thumbnail ? book.thumbnail : require("./no-picture.jpg")} //이미지없을땐 사진
        alt={book.thumbnail}
      />
      <div className="description">
        <div className="title">{book.title}</div>
        <div>{book.authors}</div>
        <div>{book.publisher}</div>
        <div>{book.datetime.slice(0, 10)}</div>
        <div>{book.status === "정상판매" ? book.sale_price : book.price}</div>
      </div>
    </div>
  );
}

export default Book;
