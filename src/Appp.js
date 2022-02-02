import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Puja from "./Puja.js";
function Appp() {
  return (
    <div>
      <Routes>
        <Route>
       
          <Route exact path="/" />
          <Route exact path="/Invitation" component={Home} />
          <Route exact path="/Puja" component={Puja} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/LOCATION" component={About} />
        </Route>
      </Routes>
    </div>
  );
}
export default Appp;
