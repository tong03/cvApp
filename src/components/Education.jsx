import React from "react";
import "../styles/Education.css";
import { useState } from "react";
const Education = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="edContainer">
      <div className="edHead">
        <p>Education</p>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          V
        </button>
      </div>
      <form className={`edForm ${open ? "active" : "inactive"}`}>
        <label htmlFor="degType">Degree</label>
        <input
          id="degType"
          type="text"
          placeholder="Degree/Field of Study"
        ></input>

        <label htmlFor="schoolName">School</label>
        <input
          id="schoolName"
          type="text"
          placeholder="School/University"
        ></input>

        <label htmlFor="cityName">City</label>
        <input id="cityName" type="text" placeholder="City"></input>

        <label htmlFor="stateName">State</label>
        <input id="stateName" type="text" placeholder="State"></input>

        <div className="duration">
          <div className="startDate">
            <label htmlFor="startD">Start Date</label>
            <input id="startD" type="date"></input>
          </div>

          <div className="endDate">
            <label htmlFor="endD">End Date</label>
            <input id="endD" type="date"></input>
          </div>
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default Education;
