import React from "react";

function Display(props) {
  return (
    <div className="timer">
      <span className="time-number">
        {props.time.h >= 10 ? props.time.h : "0" + props.time.h}:
      </span>
      <span className="time-number">
        {props.time.m >= 10 ? props.time.m : "0" + props.time.m}:
      </span>
      <span className="time-number">
        {props.time.s >= 10 ? props.time.s : "0" + props.time.s}:
      </span>
      <span className="time-number">
        {props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}
      </span>
    </div>
  );
}

export default Display;
