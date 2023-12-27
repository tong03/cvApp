import { useState } from "react";
import "./App.css";

import Logo from "./components/Logo.jsx";
import Controls from "./components/Controls.jsx";
import Info from "./components/Info.jsx";
import Display from "./components/Display.jsx";
import Education from "./components/Education.jsx";
import Work from "./components/Work.jsx";
import { InfoContext } from "./contexts/infoContext.jsx";

function App() {
  return (
    <div className="appContainer">
      <Logo />
      <div className="contentContainer">
        <Controls />
        <Info />
        <Education />
        <Work />
      </div>
      <Display />
    </div>
  );
}

export default App;
