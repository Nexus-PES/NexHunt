import React, { useState } from 'react'
import { eventDuration, eventStart } from "./Time"

export default function Progress() {

  const [widthp, setWidth] = useState(0)
  var progress = {
    borderRadius: "0 5px 5px 0",
    transform: "translateY(-65%)",
    width: `${widthp.toFixed(2)}%`,
    maxWidth: "100vw",
    height: "5px",
    backgroundColor: '#fff',
    color: "red",
    padding: "0",
    margin: "0"
  }

  setInterval(() => {
    var now = new Date().getTime();

    var percent = ((now - eventStart) / (eventDuration * 60 * 60 * 10))
    setWidth(percent);

    { percent >= 100 && setWidth(100) }
  }, 1000);


  return (
    <>
      <div className="progress_parent">
        <div style={progress}></div>
      </div>
    </>
  )
}
