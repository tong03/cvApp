import React from "react";
import "../styles/Education.css";
import { useState, useContext } from "react";
import { EducationContext } from "../contexts/EducationContext";
import Icon from "@mdi/react";
import { mdiSchool } from "@mdi/js";

const Education = () => {
  const { edData, setEdData, edSubmit, setEdSubmit } =
    useContext(EducationContext);
  const [open, setOpen] = useState(false);
  const [displayedEd, setDisplayedEd] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [localFormValues, setLocalFormValues] = useState({ ...edData });

  const clearForm = () => {
    setLocalFormValues({
      degType: "",
      schoolName: "",
      cityName: "",
      stateName: "",
      startD: "",
      endD: "",
    });
  };

  const handleEdit = () => {
    setEditMode(true);
    setOpen(true); // Expand the form when entering edit mode
    // Set the form fields to the previously entered values
    setLocalFormValues({ ...edData });
  };

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

    if (!editMode) {
      clearForm();
    }

    setEditMode(false);
  };

  return (
    <div className="edContainer">
      <div className="edHead">
        <div className="edIcon">
          <Icon path={mdiSchool} size={1.5} />
          <p className="title">Education</p>
        </div>
        <button
          onClick={() => {
            setOpen(!open);
            if (!open) {
              clearForm(); // Clear the form fields when opening
              setEditMode(false); // Exit edit mode when opening
            }
          }}
        >
          {open ? "^" : "V"}
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
          value={editMode ? edData.degType : localFormValues.degType}
          onChange={(e) => {
            const newValue = e.target.value;
            if (!editMode) {
              setLocalFormValues((prevValues) => ({
                ...prevValues,
                degType: newValue,
              }));
            } else {
              setEdData((prevData) => ({
                ...prevData,
                degType: newValue,
              }));
            }
          }}
        ></input>

        <label htmlFor="schoolName">School</label>
        <input
          id="schoolName"
          type="text"
          placeholder="School/University"
          value={editMode ? edData.schoolName : localFormValues.schoolName}
          onChange={(e) => {
            const newValue = e.target.value;
            if (!editMode) {
              setLocalFormValues((prevValues) => ({
                ...prevValues,
                schoolName: newValue,
              }));
            } else {
              setEdData((prevData) => ({
                ...prevData,
                schoolName: newValue,
              }));
            }
          }}
        ></input>

        <label htmlFor="cityName">City</label>
        <input
          id="cityName"
          type="text"
          placeholder="City"
          value={editMode ? edData.cityName : localFormValues.cityName}
          onChange={(e) => {
            const newValue = e.target.value;
            if (!editMode) {
              setLocalFormValues((prevValues) => ({
                ...prevValues,
                cityName: newValue,
              }));
            } else {
              setEdData((prevData) => ({
                ...prevData,
                cityName: newValue,
              }));
            }
          }}
        ></input>

        <label htmlFor="stateName">State</label>
        <input
          id="stateName"
          type="text"
          placeholder="State"
          value={editMode ? edData.stateName : localFormValues.stateName}
          onChange={(e) => {
            const newValue = e.target.value;
            if (!editMode) {
              setLocalFormValues((prevValues) => ({
                ...prevValues,
                stateName: newValue,
              }));
            } else {
              setEdData((prevData) => ({
                ...prevData,
                stateName: newValue,
              }));
            }
          }}
        ></input>

        <div className="duration">
          <div className="startDate">
            <label htmlFor="startD">Start Date</label>
            <input
              id="startD"
              type="date"
              value={editMode ? edData.startD : localFormValues.startD}
              onChange={(e) => {
                const newValue = e.target.value;
                if (!editMode) {
                  setLocalFormValues((prevValues) => ({
                    ...prevValues,
                    startD: newValue,
                  }));
                } else {
                  setEdData((prevData) => ({
                    ...prevData,
                    startD: newValue,
                  }));
                }
              }}
            ></input>
          </div>

          <div className="endDate">
            <label htmlFor="endD">End Date</label>
            <input
              id="endD"
              type="date"
              value={editMode ? edData.endD : localFormValues.endD}
              onChange={(e) => {
                const newValue = e.target.value;
                if (!editMode) {
                  setLocalFormValues((prevValues) => ({
                    ...prevValues,
                    endD: newValue,
                  }));
                } else {
                  setEdData((prevData) => ({
                    ...prevData,
                    endD: newValue,
                  }));
                }
              }}
            ></input>
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
            <button className="editBtn" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Education;
