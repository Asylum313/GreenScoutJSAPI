import "./Matchform.css";
import { useState } from "react";
import NavComponent from "../NavComponent";
import Dropdown from "./auto/dropdown/Dropdown";
import Autocheck from "./auto/autocheck/Autocheck";
import Autocounter from "./auto/autocounter/Autocounter";
import AutoHangCheck from "./auto/autocheck/AutoHangCheck";
import Neutralcheck from "./collection/NeutralCheck";
import HPCheck from "./collection/HPCheck";
import CollectDrop from "./collection/CollectDrop";
import ClimbTime from "./climbing/ClimbTime";
import TriggerButton from "./climbing/TriggerButton";
import ResetButton from "./climbing/ResetButton";

function Matchform() {
  const firstCount = "Scores";
  const secondCount = "Misses";
  const thirdCount = "Ejects";

  const [isRunning, setIsRunning] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const toggleStopwatch = (event) => {
    if (event) event.preventDefault();
    setIsRunning(!isRunning);
  };

  const triggerReset = (event) => {
    if (event) event.preventDefault();
    if (confirm("Reset The Climber?")) {
      setResetKey((prev) => prev + 1);
      setIsRunning(false);
    }
  };

  return (
    <span id="body">
      <NavComponent></NavComponent>
      <span id="form">
        <form id="formBody" className="formElement">
          <input
            placeholder="Match #"
            type="text"
            className="child"
            id="matchNum"
          />
          <input
            placeholder="Team #"
            type="text"
            className="child"
            id="teamNum"
          />
          <Dropdown></Dropdown>
          <div className="child" id="headparent">
            <h1 className="header">Auto Mode</h1>
          </div>
          <Autocheck></Autocheck>
          <AutoHangCheck></AutoHangCheck>
          <Autocounter name={firstCount}></Autocounter>
          <Autocounter name={secondCount}></Autocounter>
          <Autocounter name={thirdCount}></Autocounter>
          <div className="child" id="headparent">
            <h1 className="header">Cycles</h1>
          </div>
          <div className="child" id="headparent">
            <h1 className="header">Collection Ability</h1>
          </div>
          <Neutralcheck></Neutralcheck>
          <HPCheck></HPCheck>
          <CollectDrop></CollectDrop>
          <div className="child" id="headparent">
            <h1 className="header">Climbing</h1>
          </div>
          <ClimbTime
            runningBool={isRunning}
            key={resetKey}
            onToggle={toggleStopwatch}
          ></ClimbTime>
          <div className="child">
            <ResetButton onReset={triggerReset}></ResetButton>
          </div>
          <div className="child" id="bottomspace"></div>
        </form>
        <div id="formScore" className="formElement">
          <TriggerButton onTrigger={toggleStopwatch}></TriggerButton>
        </div>
      </span>
    </span>
  );
}

export default Matchform;
