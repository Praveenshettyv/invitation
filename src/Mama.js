import React from "react";
import { useState } from "react";

function Mama(props) {
  const initialState = "Gust";
  const [name, setname] = useState(initialState);
  const submithandler = (e) => {
    e.preventDefault();
    setname(e.target.value);
    console.log(setname);
    console.log(name);
  };
  return (
    <form>
      <div>WELCOME TO OUR PARTY INVITATION</div>
      <label>Enter your Name</label>
      <input type="text" id={name} onChange={submithandler} />
      <button>submit </button>
    </form>
  );
}

export default Mama;
