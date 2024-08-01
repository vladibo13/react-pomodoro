import React from "react";

const TimeSetter = ({ time, setTime, min, max, interval, type }) => {
  return (
    <div className="border p-5 bg-secondary bg-gradient">
      <h6>{type + " Length"} </h6>
      <button
        className="m-2 btn btn-light "
        onClick={() => (time > min ? setTime(time - interval) : null)}
      >
        Down
      </button>
      <span>{time / interval}</span>
      <button
        className="m-2 btn btn-light"
        onClick={() => (time < max ? setTime(time + interval) : null)}
      >
        Up
      </button>
    </div>
  );
};

export default TimeSetter;
