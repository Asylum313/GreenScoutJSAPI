import "../Matchform.css";
import { useEffect, useRef } from "react";

const Cycles = ({ list, runningBool, setTime, onTrigger }) => {
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

  const remove = (ind, event) => {
    if (event) event.preventDefault();
    onTrigger(ind);
  };

  return (
    <div id="cycleContainer">
      {list.map((item, index) => (
        <div className={item.event} key={index}>
          <div className="cycleElementImg"></div>
          <div className="cycleElementText">
            {item.event} {item.time}s
          </div>
          <button
            className="deleteButton"
            onClick={(event) => remove(index, event)}
          ></button>
        </div>
      ))}
    </div>
  );
};

export default Cycles;
