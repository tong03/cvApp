import React from "react";
import "../styles/Display.css";
import { useState, useContext } from "react";
import { InfoContext } from "../contexts/infoContext";
import { EducationContext } from "../contexts/EducationContext";
import { WorkContext } from "../contexts/WorkContext";

const Display = () => {
  const { infoData } = useContext(InfoContext);
  const { edData } = useContext(EducationContext);
  const { workData } = useContext(WorkContext);

  const formatDate = (dateString) => {
    const options = { month: "short" };
    const date = new Date(dateString);
    const formattedMonth = date.toLocaleString("en-US", options);
    return `${formattedMonth}, ${date.getFullYear()}`;
  };

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
            <p id="schoolName">
              {edData.schoolName
                ? edData.schoolName
                : "University of Southern California"}
            </p>
            <p id="degreeName">
              {edData.degType
                ? edData.degType
                : "Bachelors of Science: Computer Science"}
            </p>
          </div>
          <div className="rightContent">
            <p>
              {edData.startD && edData.endD
                ? `${formatDate(edData.startD)} - ${formatDate(edData.endD)}`
                : "8/2020 - present"}
            </p>
            <p>
              {edData.cityName && edData.stateName
                ? `${edData.cityName}, ${edData.stateName}`
                : "Los Angeles, CA"}
            </p>
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
            <p id="jobName">
              {workData.jobName
                ? workData.jobName
                : "USC Ecological Data Science"}
            </p>
            <p id="jobTitle">
              {workData.company ? workData.company : "Undergraduate Research"}
            </p>
            <p id="jobDescription">
              {workData.jobDescription
                ? workData.jobDescription
                : "Something about your job...."}
            </p>
          </div>
          <div className="rightContent">
            <p>
              {workData.startD && workData.endD
                ? `${formatDate(workData.startD)} - ${formatDate(
                    workData.endD
                  )}`
                : "8/2020 - present"}
            </p>
            <p>
              {edData.cityName && edData.stateName
                ? `${edData.cityName}, ${edData.stateName}`
                : "Los Angeles, CA"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
