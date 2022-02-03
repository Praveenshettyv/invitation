import React from "react";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import Puja from "./Puja";
const Appp = () => {
  return (
    <div>
      <Home />
      <center>
        <About />
      </center>

      <Puja />
      <Contact />
    </div>
  );
};

export default Appp;
