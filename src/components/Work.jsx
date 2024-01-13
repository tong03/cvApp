import React from "react";
import "../styles/Work.css";
import { useState, useContext } from "react";
import { WorkContext } from "../contexts/WorkContext";

const Work = () => {
  const { workData, setWorkData, workSubmit, setWorkSubmit } =
    useContext(WorkContext);
  const [open, setOpen] = useState(false);
  const [displayedWork, setDisplayedWork] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [localFormValues, setLocalFormValues] = useState({ ...workData }); // Local state for form values

  const clearForm = () => {
    setLocalFormValues({
      jobName: "",
      company: "",
      startD: "",
      endD: "",
      jobDescription: "",
      stateName: "",
      cityName: "",
    });
  };

  const handleEdit = () => {
    setEditMode(true);
    setOpen(true); // Expand the form when entering edit mode
    // Set the form fields to the previously entered values
    setLocalFormValues({ ...workData });
  };

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

    if (!editMode) {
      clearForm(); // Clear the form fields after submission if not in edit mode
    }

    setEditMode(false); // Exit edit mode after submission
  };

  return (
    <div className="workContainer">
      <div className="workHead">
        <p>Work Experience</p>
        <button
          onClick={() => {
            setOpen(!open);
            if (!open) {
              clearForm(); // Clear the form fields when opening
              setEditMode(false); // Exit edit mode when opening
            }
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
        <input
          id="jobName"
          type="text"
          placeholder="Job Title"
          value={editMode ? workData.jobName : localFormValues.jobName}
          onChange={(e) => {
            const newValue = e.target.value;
            if (!editMode) {
              setLocalFormValues((prevValues) => ({
                ...prevValues,
                jobName: newValue,
              }));
            } else {
              setWorkData((prevData) => ({
                ...prevData,
                jobName: newValue,
              }));
            }
          }}
        ></input>

        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          placeholder="Company"
          value={editMode ? workData.company : localFormValues.company}
          onChange={(e) => {
            const newValue = e.target.value;
            if (!editMode) {
              setLocalFormValues((prevValues) => ({
                ...prevValues,
                company: newValue,
              }));
            } else {
              setWorkData((prevData) => ({
                ...prevData,
                company: newValue,
              }));
            }
          }}
        ></input>

        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          placeholder="City"
          value={editMode ? workData.cityName : localFormValues.cityName}
          onChange={(e) => {
            const newValue = e.target.value;
            if (!editMode) {
              setLocalFormValues((prevValues) => ({
                ...prevValues,
                cityName: newValue,
              }));
            } else {
              setWorkData((prevData) => ({
                ...prevData,
                cityName: newValue,
              }));
            }
          }}
        ></input>

        <label htmlFor="state">State</label>
        <input
          id="state"
          type="text"
          placeholder="State"
          value={editMode ? workData.stateName : localFormValues.stateName}
          onChange={(e) => {
            const newValue = e.target.value;
            if (!editMode) {
              setLocalFormValues((prevValues) => ({
                ...prevValues,
                stateName: newValue,
              }));
            } else {
              setWorkData((prevData) => ({
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
              value={editMode ? workData.startD : localFormValues.startD}
              onChange={(e) => {
                const newValue = e.target.value;
                if (!editMode) {
                  setLocalFormValues((prevValues) => ({
                    ...prevValues,
                    startD: newValue,
                  }));
                } else {
                  setWorkData((prevData) => ({
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
              value={editMode ? workData.endD : localFormValues.endD}
              onChange={(e) => {
                const newValue = e.target.value;
                if (!editMode) {
                  setLocalFormValues((prevValues) => ({
                    ...prevValues,
                    endD: newValue,
                  }));
                } else {
                  setWorkData((prevData) => ({
                    ...prevData,
                    endD: newValue,
                  }));
                }
              }}
            ></input>
          </div>
        </div>

        <label htmlFor="jobDescription">Description</label>
        <textarea
          id="jobDescription"
          type="text"
          placeholder="Main tasks"
          value={
            editMode ? workData.jobDescription : localFormValues.jobDescription
          }
          onChange={(e) => {
            const newValue = e.target.value;
            if (!editMode) {
              setLocalFormValues((prevValues) => ({
                ...prevValues,
                jobDescription: newValue,
              }));
            } else {
              setWorkData((prevData) => ({
                ...prevData,
                jobDescription: newValue,
              }));
            }
          }}
        ></textarea>

        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          {editMode ? "Update" : "Save"}
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
            <button className="editBtn" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
