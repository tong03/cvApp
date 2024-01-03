import { useState } from "react";
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

  const [edData, setEdData] = useState({
    degType: "",
    schoolName: "",
    cityName: "",
    stateName: "",
    startD: "",
    endD: "",
  });

  const [workData, setWorkData] = useState({
    jobName: "",
    company: "",
    startD: "",
    endD: "",
    jobDescription: "",
    stateName: "",
    cityName: "",
  });

  return (
    <div className="appContainer">
      <InfoContext.Provider value={{ infoData, setInfoData }}>
        <WorkContext.Provider value={{ workData, setWorkData }}>
          <EducationContext.Provider value={{ edData, setEdData }}>
            <Logo />
            <div className="contentContainer">
              <Controls />
              <Info />
              <Education />
              <Work />
            </div>
            <Display />
          </EducationContext.Provider>
        </WorkContext.Provider>
      </InfoContext.Provider>
    </div>
  );
}

export default App;