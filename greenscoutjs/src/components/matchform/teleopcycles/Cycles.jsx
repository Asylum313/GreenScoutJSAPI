import "../Matchform.css";
import { useEffect, useRef } from "react";

const Cycles = ({ list, runningBool, setTime }) => {
  const timerCycleRef = useRef(null);

  useEffect(() => {
    if (runningBool) {
      timerCycleRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(timerCycleRef.current);
    }

    return () => clearInterval(timerCycleRef.current);
  }, [runningBool, setTime]);

  return (
    <div id="cycleContainer">
      {list.map((item, index) => (
        <div key={index} className="cycleElement">
          {item.event} {item.time}s
        </div>
      ))}
    </div>
  );
};

export default Cycles;
