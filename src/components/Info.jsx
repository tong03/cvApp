import React from "react";
import "../styles/Info.css";
import { useState, useContext } from "react";

const Info = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormData = {
      fullName: e.target.elements.fName.value,
      email: e.target.elements["e-mail"].value,
      phone: e.target.elements.phoneNum.value,
    };
  };

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
        <label htmlFor="fName">Full Name</label>
        <input type="text" id="fName" placeholder="Full Name Here"></input>

        <label htmlFor="e-mail">Email</label>
        <input
          id="e-mail"
          type="email"
          placeholder="johnsmith@gmail.com"
        ></input>

        <label htmlFor="phoneNum">Phone Number</label>
        <input id="phoneNum" type="phone" placeholder="xxx-xxx-xxxx"></input>

        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
};

export default Info;
