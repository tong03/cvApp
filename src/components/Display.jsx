import React from "react";
import "../styles/Display.css";
import { useState, useContext } from "react";
import { InfoContext } from "../contexts/infoContext";
import { EducationContext } from "../contexts/EducationContext";
import { WorkContext } from "../contexts/WorkContext";

const Display = () => {
  const { infoData, infoSubmit } = useContext(InfoContext);
  const { edData, edSubmit } = useContext(EducationContext);
  const { workData, workSubmit } = useContext(WorkContext);

  const formatDate = (dateString) => {
    const options = { month: "short" };
    const date = new Date(dateString);
    const formattedMonth = date.toLocaleString("en-US", options);
    return `${formattedMonth}, ${date.getFullYear()}`;
  };

  return (
    <div className="displayScreen">
      {/* Info Section */}
      <div className="infoSection">
        {infoSubmit && (
          <>
            <p>{infoData.fullName}</p>
            <div className="contactInfo">
              <p>{infoData.email}</p>
              <p>{infoData.phone}</p>
            </div>
          </>
        )}
      </div>

      {/* Education Section */}
      <div className="educationSection">
        {edSubmit && (
          <>
            <div className="sectionName">
              <p>Education</p>
              <hr className="rounded"></hr>
            </div>

            <div className="sectionContent">
              <div className="leftContent">
                <p id="schoolName">{edData.schoolName}</p>
                <p id="degreeName">{edData.degType}</p>
              </div>

              <div className="rightContent">
                <p>
                  {`${formatDate(edData.startD)} - ${formatDate(edData.endD)}`}
                </p>
                <p>{`${edData.cityName}, ${edData.stateName}`}</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Work Section */}
      <div className="workSection">
        {workSubmit && (
          <>
            <div className="sectionName">
              <p>Work Experience</p>
              <hr className="rounded"></hr>
            </div>

            <div className="sectionContent">
              <div className="leftContent">
                <p id="jobName">{workData.jobName}</p>
                <p id="jobTitle">{workData.company}</p>
                <p id="jobDescription">{workData.jobDescription}</p>
              </div>
              <div className="rightContent">
                <p>
                  {`${formatDate(workData.startD)} - ${formatDate(
                    workData.endD
                  )}`}
                </p>
                <p>{`${workData.cityName}, ${workData.stateName}`}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Display;
