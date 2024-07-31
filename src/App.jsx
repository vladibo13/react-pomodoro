import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const defaultBreakTime = 5 * 60;
const defaultSessionTime = 25 * 60;
const min = 60;
const max = 60 * 60;
const interval = 60;

function App() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime);
  const [sessionTime, setsessionTime] = useState(defaultSessionTime);
  const [displayState, setDisplayState] = useState({
    time: sessionTime,
    timeType: "Session",
    timerRunning: false,
  });
  return (
    <div>
      <h1 className="mt-5 text-center">Hello</h1>
    </div>
  );
}

export default App;
