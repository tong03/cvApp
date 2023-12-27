import React from "react";
import "../styles/Display.css";
import { useState, useContext } from "react";
import { InfoContext } from "../contexts/infoContext";

const Display = () => {
  const { infoData } = useContext(InfoContext);
  return (
    <div className="displayScreen">
      <div className="infoSection">
        <p>{infoData.fullName ? infoData.fullName : "John Smith"}</p>
        <div className="contactInfo">
          <p>{infoData.email ? infoData.email : "smithj@usc.edu"}</p>
          <p>{infoData.phone ? infoData.phone : "425-901-2003"}</p>
        </div>
      </div>
      <div className="educationSection">
        <div className="sectionName">
          <p>Education</p>
          <hr className="rounded"></hr>
        </div>

        <div className="sectionContent">
          <div className="leftContent">
            <p id="schoolName">University of Southern California</p>
            <p id="degreeName">Bachelors of Science: Computer Science</p>
          </div>
          <div className="rightContent">
            <p>8/2020 - present</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
      </div>
      <div className="workSection">
        <div className="sectionName">
          <p>Work Experience</p>
          <hr className="rounded"></hr>
        </div>

        <div className="sectionContent">
          <div className="leftContent">
            <p id="jobName">USC Ecological Data Science</p>
            <p id="jobTitle">Undergraduate Research</p>
          </div>
          <div className="rightContent">
            <p>2/2022 - present</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
