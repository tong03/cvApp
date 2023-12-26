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
        <label for="degType">Degree</label>
        <input
          id="degType"
          type="text"
          placeholder="Degree/Field of Study"
        ></input>

        <label for="schoolName">School</label>
        <input
          id="schoolName"
          type="text"
          placeholder="School/University"
        ></input>

        <label for="cityName">City</label>
        <input id="cityName" type="text" placeholder="City"></input>

        <label for="stateName">State</label>
        <input id="stateName" type="text" placeholder="State"></input>

        <div className="duration">
          <div className="startDate">
            <label for="startD">Start Date</label>
            <input id="startD" type="date"></input>
          </div>

          <div className="endDate">
            <label for="endD">End Date</label>
            <input id="endD" type="date"></input>
          </div>
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default Education;
