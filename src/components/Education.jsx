import React from "react";
import "../styles/Education.css";
import { useState, useContext } from "react";
import { EducationContext } from "../contexts/EducationContext";

const Education = () => {
  const { edData, setEdData, edSubmit, setEdSubmit } =
    useContext(EducationContext);
  const [open, setOpen] = useState(false);
  const [displayedEd, setDisplayedEd] = useState(false);

  const formatDate = (dateString) => {
    const options = { month: "short" };
    const date = new Date(dateString);
    const formattedMonth = date.toLocaleString("en-US", options);
    return `${formattedMonth}, ${date.getFullYear()}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEdData = {
      degType: e.target.elements.degType.value,
      schoolName: e.target.elements.schoolName.value,
      cityName: e.target.elements.cityName.value,
      stateName: e.target.elements.stateName.value,
      startD: e.target.elements.startD.value,
      endD: e.target.elements.endD.value,
    };

    setEdData(newEdData);
    setEdSubmit(true);
    setDisplayedEd(true);
  };

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
      <form
        className={`edForm ${open ? "active" : "inactive"}`}
        onSubmit={handleSubmit}
      >
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
        <button onClick={() => setOpen(!open)}>Save</button>
      </form>

      {edSubmit && displayedEd && <hr className="roundEdit"></hr>}
      {edSubmit && displayedEd && (
        <div className="editContainer">
          <div className="displayedEd">
            <p>Degree: {edData.degType}</p>
            <p>School: {edData.schoolName}</p>
            <p>Location: {`${edData.cityName}, ${edData.stateName}`}</p>
            <p>
              Duration:{" "}
              {`${formatDate(edData.startD)} - ${formatDate(edData.endD)}`}
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

export default Education;
