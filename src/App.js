import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Puja from "./Puja.js";
import { Fragment } from "react";

// Link, Outlet

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Invitation" element={<Home />} />
          <Route path="PUJA" element={<Puja />} />
          <Route path="LOCATION" element={<About />} />
          <Route path="CONTACT" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
function Layout() {
  return (
    <div>
      <div>hello</div>
      <center>
        <h1>-------------------------------------</h1>
        <h1 className="raju"> WELCOME To HOUSE WARMING PARTY</h1>
        <h1>-------------------------------------</h1>
        <h1>You are invited to our housewarming party!</h1>

        <nav className="header">
          <Fragment>
            <Link className="sai" to="Invitation">
              <h2>INVITATION</h2>
            </Link>{" "}
            <Link className="sai" to="PUJA">
              <h2 className="sai">PUJA</h2>
            </Link>{" "}
            <Link className="sai" to="LOCATION">
              <h2 className="sai">LOCATION</h2>
            </Link>{" "}
            <Link className="sai" to="CONTACT">
              <h2 className="sai">CONTACT</h2>
            </Link>{" "}
          </Fragment>
        </nav>
        <div className="content">
          <Outlet />
        </div>
      </center>
    </div>
  );
}
