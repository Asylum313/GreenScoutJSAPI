import "./CycleButton.css";
import { useState } from "react";

function CycleTimerToggle({ isCycleRunning, onTrigger }) {
  const [idz, setIdz] = useState("cycleImg");

  const setTheId = () => {
    if (isCycleRunning) {
      setIdz("cycleImg");
    } else {
      setIdz("stopImg");
    }
  };

  return (
    <button
      id="sideButtonCycleTrigger"
      onClick={() => {
        onTrigger();
        setTheId();
      }}
    >
      <div id={idz}></div>
      Cycles
    </button>
  );
}

export default CycleTimerToggle;
