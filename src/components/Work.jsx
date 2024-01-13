import React from "react";
import "../styles/Work.css";
import { useState, useContext } from "react";
import { WorkContext } from "../contexts/WorkContext";

const Work = () => {
  const { workData, setWorkData, workSubmit, setWorkSubmit } =
    useContext(WorkContext);
  const [open, setOpen] = useState(false);
  const [displayedWork, setDisplayedWork] = useState(false);

  const formatDate = (dateString) => {
    const options = { month: "short" };
    const date = new Date(dateString);
    const formattedMonth = date.toLocaleString("en-US", options);
    return `${formattedMonth}, ${date.getFullYear()}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWorkData = {
      jobName: e.target.elements.jobName.value,
      company: e.target.elements.company.value,
      startD: e.target.elements.startD.value,
      endD: e.target.elements.endD.value,
      jobDescription: e.target.elements.jobDescription.value,
      stateName: e.target.elements.state.value,
      cityName: e.target.elements.city.value,
    };

    setWorkData(newWorkData);
    setWorkSubmit(true);
    setDisplayedWork(true);
  };

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
      <form
        className={`workForm ${open ? "active" : "inactive"}`}
        onSubmit={handleSubmit}
      >
        <label htmlFor="jobName">Job Title</label>
        <input id="jobName" type="text" placeholder="Job Title"></input>

        <label htmlFor="company">Company</label>
        <input id="company" type="text" placeholder="Company"></input>

        <label htmlFor="city">City</label>
        <input id="city" type="text" placeholder="City"></input>

        <label htmlFor="state">State</label>
        <input id="state" type="text" placeholder="State"></input>

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
        <textarea
          id="jobDescription"
          type="text"
          placeholder="Main tasks"
        ></textarea>

        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          Save
        </button>
      </form>

      {workSubmit && displayedWork && <hr className="roundEdit"></hr>}
      {workSubmit && displayedWork && (
        <div className="editContainer">
          <div className="displayedWork">
            <p>Job: {workData.jobName}</p>
            <p>Company: {workData.company}</p>
            <p>Location: {`${workData.cityName}, ${workData.stateName}`}</p>
            <p>
              Duration:{" "}
              {`${formatDate(workData.startD)} - ${formatDate(workData.endD)}`}
            </p>
          </div>
          <div className="btnContainer">
            <button className="editBtn">Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
