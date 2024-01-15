import React from "react";
import "../styles/Info.css";
import { useState, useContext } from "react";
import { InfoContext } from "../contexts/infoContext.jsx";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

const Info = () => {
  const { infoData, setInfoData, infoSubmit, setInfoSubmit } =
    useContext(InfoContext);
  const [open, setOpen] = useState(false);
  const [displayedInfo, setDisplayedInfo] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [localFormValues, setLocalFormValues] = useState({ ...infoData });

  const clearForm = () => {
    setLocalFormValues({
      fullName: "",
      email: "",
      phone: "",
    });
  };

  const handleEdit = () => {
    setEditMode(true);
    setOpen(true); // Expand the form when entering edit mode
    // Set the form fields to the previously entered values
    setLocalFormValues({ ...infoData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newInfoData = {
      fullName: e.target.elements.fName.value,
      email: e.target.elements["e-mail"].value,
      phone: e.target.elements.phoneNum.value,
    };

    setInfoData(newInfoData);
    setInfoSubmit(true);
    setDisplayedInfo(true);

    if (!editMode) {
      clearForm(); // Clear the form fields after submission if not in edit mode
    }

    setEditMode(false); // Exit edit mode after submission
  };

  return (
    <div className="infoContainer">
      <div className="infoHead">
        <div className="infoIcon">
          <Icon path={mdiAccount} size={1.5} />
          <p className="title">General Information</p>
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
        className={`infoForm ${open ? "active" : "inactive"}`}
        onSubmit={handleSubmit}
      >
        <label htmlFor="fName">Full Name</label>
        <input
          type="text"
          id="fName"
          name="fName"
          placeholder="Full Name Here"
          value={editMode ? infoData.fullName : localFormValues.fullName}
          onChange={(e) => {
            const newValue = e.target.value;
            if (!editMode) {
              setLocalFormValues((prevValues) => ({
                ...prevValues,
                fullName: newValue,
              }));
            } else {
              setInfoData((prevData) => ({
                ...prevData,
                fullName: newValue,
              }));
            }
          }}
        ></input>

        <label htmlFor="e-mail">Email</label>
        <input
          id="e-mail"
          name="e-mail"
          type="email"
          placeholder="johnsmith@gmail.com"
          value={editMode ? infoData.email : localFormValues.email}
          onChange={(e) => {
            const newValue = e.target.value;
            if (!editMode) {
              setLocalFormValues((prevValues) => ({
                ...prevValues,
                email: newValue,
              }));
            } else {
              setInfoData((prevData) => ({
                ...prevData,
                email: newValue,
              }));
            }
          }}
        ></input>

        <label htmlFor="phoneNum">Phone Number</label>
        <input
          id="phoneNum"
          name="phoneNum"
          type="phone"
          placeholder="xxx-xxx-xxxx"
          value={editMode ? infoData.phone : localFormValues.phone}
          onChange={(e) => {
            const newValue = e.target.value;
            if (!editMode) {
              setLocalFormValues((prevValues) => ({
                ...prevValues,
                phone: newValue,
              }));
            } else {
              setInfoData((prevData) => ({
                ...prevData,
                phone: newValue,
              }));
            }
          }}
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

      {infoSubmit && displayedInfo && <hr className="roundEdit"></hr>}
      {infoSubmit && displayedInfo && (
        <div className="editContainer">
          <div className="displayedInfo">
            <p>Name: {infoData.fullName}</p>
            <p>Email: {infoData.email}</p>
            <p>Phone: {infoData.phone}</p>
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

export default Info;
