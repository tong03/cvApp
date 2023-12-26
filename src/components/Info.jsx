import React from "react";
import "../styles/Info.css";
import { useState } from "react";

const Info = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="infoContainer">
      <div className="infoHead">
        <p>General Information</p>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          V
        </button>
      </div>
      <form className={`infoForm ${open ? "active" : "inactive"}`}>
        <label for="fName">Full Name</label>
        <input type="text" id="fName" placeholder="Full Name Here"></input>

        <label for="e-mail">Email</label>
        <input
          id="e-mail"
          type="email"
          placeholder="johnsmith@gmail.com"
        ></input>

        <label for="phoneNum">Phone Number</label>
        <input id="phoneNum" type="phone" placeholder="xxx-xxx-xxxx"></input>

        <button>Save</button>
      </form>
    </div>
  );
};

export default Info;
