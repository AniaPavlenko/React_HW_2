import React from "react";

function Button(props) {
  return (
    <div>
      {props.status === 0 ? (
        <button className="stopwatch-btn btn-start" onClick={props.start}>
          Start
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div>
          <button className="stopwatch-btn btn-stop" onClick={props.stop}>
            Stop
          </button>
          <button className="stopwatch-btn btn-reset" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div>
          <button className="stopwatch-btn btn-resume" onClick={props.resume}>
            Resume
          </button>
          <button className="stopwatch-btn btn-reset" onClick={props.reset}>
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Button;
