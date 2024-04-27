import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Parent from "./components/Parent";
import Child from "./components/Child";

function App() {
  return <Parent Compo={<p>안녕하세요</p>}></Parent>;
}

export default App;
