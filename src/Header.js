import React from "react";
import "./About.css";
import logo from "./hhhhh.jpg"; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return (
    <div className="hello">
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Header;
