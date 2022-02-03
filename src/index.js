import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Appp from "./Appp";

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <Appp />
  </BrowserRouter>,
  document.getElementById("root")
);
