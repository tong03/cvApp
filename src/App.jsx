import { useState, useEffect, useRef } from "react";
import "./App.css";

import Logo from "./components/Logo.jsx";
import Controls from "./components/Controls.jsx";
import Info from "./components/Info.jsx";
import Display from "./components/Display.jsx";
import Education from "./components/Education.jsx";
import Work from "./components/Work.jsx";

import { InfoContext } from "./contexts/infoContext.jsx";
import { EducationContext } from "./contexts/EducationContext.jsx";
import { WorkContext } from "./contexts/WorkContext.jsx";

function App() {
  const [infoData, setInfoData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [infoSubmit, setInfoSubmit] = useState(false);

  const [edData, setEdData] = useState({
    degType: "",
    schoolName: "",
    cityName: "",
    stateName: "",
    startD: "",
    endD: "",
  });
  const [edSubmit, setEdSubmit] = useState(false);

  const [workData, setWorkData] = useState({
    jobName: "",
    company: "",
    startD: "",
    endD: "",
    jobDescription: "",
    stateName: "",
    cityName: "",
  });
  const [workSubmit, setWorkSubmit] = useState(false);

  return (
    <div className="appContainer">
      <InfoContext.Provider
        value={{ infoData, setInfoData, infoSubmit, setInfoSubmit }}
      >
        <WorkContext.Provider
          value={{ workData, setWorkData, workSubmit, setWorkSubmit }}
        >
          <EducationContext.Provider
            value={{ edData, setEdData, edSubmit, setEdSubmit }}
          >
            <Logo className="logo" />
            <div className="contentContainer">
              <Controls id="controls" />
              <Info id="info" />
              <Education id="education" />
              <Work id="work" />
            </div>
            <Display className="display" />
          </EducationContext.Provider>
        </WorkContext.Provider>
      </InfoContext.Provider>
    </div>
  );
}

export default App;
