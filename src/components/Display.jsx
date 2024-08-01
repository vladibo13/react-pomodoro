import React from "react";
import { formatTime } from "../utils/helpers";

const Display = ({ displayState, reset, startStop }) => {
  console.log("displayState", displayState);
  return (
    <div className="p-3 border bg-secondary bg-gradient p-5">
      <h6>{displayState.timeType}</h6>
      <span>{formatTime(displayState.time)}</span>
      <div>
        <button
          className="btn btn-light m-2"
          onClick={() => startStop(displayState)}
        >
          {displayState.timerRunning ? "Pause" : "Play"}
        </button>
        <button className="btn btn-light m-2" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Display;
