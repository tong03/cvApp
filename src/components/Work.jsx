import React from "react";
import "../styles/Work.css";
import { useState } from "react";

const Work = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="workContainer">
      <div className="workHead">
        <p>Work Experience</p>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          V
        </button>
      </div>
      <form className={`workForm ${open ? "active" : "inactive"}`}>
        <label htmlFor="jobName">Job Title</label>
        <input id="jobName" type="text" placeholder="Job Title"></input>

        <label htmlFor="company">Company</label>
        <input id="company" type="text" placeholder="Company"></input>

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

        <label htmlFor="jobDescription">Description</label>
        <input id="jobDescription" type="text" placeholder="Main tasks"></input>

        <button>Save</button>
      </form>
    </div>
  );
};

export default Work;
