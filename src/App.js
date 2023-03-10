import React, { useState } from "react";
import "./App.css";
import Display from "./Components/Display";
import Button from "./Components/Button";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [stoppedTime, setStoppedTime] = useState([]);

  let updMs = time.ms;
  let updS = time.s;
  let updM = time.m;
  let updH = time.h;

  const run = () => {
    if (updM === 60) {
      updH++;
      updM = 0;
    }

    if (updS === 60) {
      updM++;
      updS = 0;
    }

    // тут вказано 100 мілісекунд, так як сіпається око коли воно рахує 1000 мілісекунд ))
    if (updMs === 100) {
      updS++;
      updMs = 0;
    }
    updMs++;
    return setTime({ ms: updMs, s: updS, m: updM, h: updH });
  };

  const saveTime = () => {
    let objToArr = Object.entries({ ms: updMs, s: updS, m: updM, h: updH });
    let [[, ms], [, s], [, m], [, h]] = objToArr;
    stoppedTime.push([h, m, s, ms].join(":"));
  };

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    saveTime();
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    saveTime();
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => start();

  return (
    <div className="stopwatch">
      <Display time={time} />
      <Button
        start={start}
        status={status}
        stop={stop}
        reset={reset}
        resume={resume}
      />

      <div className="stopped-time">
        {stoppedTime.map((val, index) => {
          return <p key={index.toString()}>{val}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
