import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import TimeSetter from "./components/TimeSetter";
import Display from "./components/Display";

const defaultBreakTime = 5 * 60;
const defaultSessionTime = 25 * 60;
const min = 60;
const max = 60 * 60;
const interval = 60;

function App() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime);
  const [sessionTime, setSessionTime] = useState(defaultSessionTime);
  const [displayState, setDisplayState] = useState({
    time: sessionTime,
    timeType: "Session",
    timerRunning: false,
  });

  useEffect(() => {
    let timerID;
    if (!displayState.timerRunning) return;

    if (displayState.timerRunning) {
      timerID = window.setInterval(decrementDisplay, 1000);
    }

    return () => {
      window.clearInterval(timerID);
    };
  }, [displayState.timerRunning]);

  const reset = () => {
    console.log("reset");
    setBreakTime(defaultBreakTime);
    setSessionTime(defaultSessionTime);
    setDisplayState({
      time: defaultSessionTime,
      timeType: "Session",
      timerRunning: false,
    });
  };

  const startStop = () => {
    console.log("startstop");
    setDisplayState((prev) => ({
      ...prev,
      timerRunning: !prev.timerRunning,
    }));
  };

  const changeBreakTime = (time) => {
    if (displayState.timerRunning) return;
    setBreakTime(time);
    console.log("changeBreakTime");
  };

  const decrementDisplay = () => {
    setDisplayState((prev) => ({
      ...prev,
      time: prev.time - 1,
    }));
  };

  const changeSessionTime = (time) => {
    console.log("changeSessionTime");
    if (displayState.timerRunning) return;
    setSessionTime(time);
    setDisplayState({
      time: time,
      timeType: "Session",
      timerRunning: false,
    });
  };

  return (
    <div className="border container  d-flex justify-content-center align-items-center full-height">
      <div className="text-center">
        <div className="row">
          <div className="col-sm">
            <TimeSetter
              time={breakTime}
              setTime={changeBreakTime}
              min={min}
              max={max}
              interval={interval}
              type="Break"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <TimeSetter
              time={sessionTime}
              setTime={changeSessionTime}
              min={min}
              max={max}
              interval={interval}
              type="Session"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Display
              displayState={displayState}
              reset={reset}
              startStop={startStop}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
