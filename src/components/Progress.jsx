import React, { useState } from 'react'
import { startTime, hours } from "./Time"

export default function Progress() {

  const [widthp, setWidth] = useState(0)
  // const [timeRemaining, setTimeRemaining] = useState(finalTime);

  var progress = {
    borderRadius: "0 5px 5px 0",
    transform: "translateY(-65%)",
    width: `${widthp.toFixed(2)}%`,
    maxWidth:"100vw",
    height: "5px",
    backgroundColor: '#fff',
    color: "red",
    padding:"0",
    margin:"0"
  }

  // var currentTime;
  setInterval(() => {
    var currentTime = Number(Math.abs(new Date().getTime() / 1000).toFixed(0));
    var percent = (currentTime - startTime) / (hours * 36);
    setWidth(percent)

    // progress.width = `${widthp.toFixed(2)}%`;
    // progress.width = `writable: true`;
  }, 1000);



  return (
    <>
      <div className="progress_parent">
        <div style={progress}></div>
      </div>
    </>
      )
}
