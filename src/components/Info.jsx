import React from "react";
import "../styles/Info.css";
import { useState, useContext } from "react";
import { InfoContext } from "../contexts/infoContext.jsx";

const Info = () => {
  const { infoData, setInfoData, infoSubmit, setInfoSubmit } =
    useContext(InfoContext);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInfoData = {
      fullName: e.target.elements.fName.value,
      email: e.target.elements["e-mail"].value,
      phone: e.target.elements.phoneNum.value,
    };

    setInfoData(newInfoData);
    setInfoSubmit(true);
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
      <form
        className={`infoForm ${open ? "active" : "inactive"}`}
        onSubmit={handleSubmit}
      >
        <label htmlFor="fName">Full Name</label>
        <input
          type="text"
          id="fName"
          name="fName"
          placeholder="Full Name Here"
        ></input>

        <label htmlFor="e-mail">Email</label>
        <input
          id="e-mail"
          name="e-mail"
          type="email"
          placeholder="johnsmith@gmail.com"
        ></input>

        <label htmlFor="phoneNum">Phone Number</label>
        <input
          id="phoneNum"
          name="phoneNum"
          type="phone"
          placeholder="xxx-xxx-xxxx"
        ></input>

        <button
          type="submit"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Info;
