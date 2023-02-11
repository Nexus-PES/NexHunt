import React, { useState } from 'react'
import { finalTime } from './Time';

// const finalTime = Number(Math.abs(new Date().getTime() / 1000).toFixed(0)) + 180;
// const finalTime = 1667318326 + 3600+ 3600;

function TimeLeft() {
    const [timeRemaining, setTimeRemaining] = useState(finalTime);

    setInterval(() => {
        var currentTime = Number(Math.floor(new Date().getTime() / 1000).toFixed(0));
        setTimeRemaining(finalTime - currentTime);
    }, 1000);


    if (timeRemaining >= 0) {
        return (
            <div className="time_remaining_block">
                <div className="time_remaining_text">
                    <span className="time_block">
                        {Math.floor(timeRemaining / 3600 >= 10) ? Math.floor(timeRemaining / 3600) : `0${Math.floor(timeRemaining / 3600)}`}
                    </span> : <span className="time_block">
                        {(Math.floor(timeRemaining / 60) % 60) >= 10 ? (Math.floor(timeRemaining / 60) % 60) : `0${(Math.floor(timeRemaining / 60) % 60)}`}
                    </span> : <span className="time_block">

                        {timeRemaining % 60 >= 10 ? timeRemaining % 60 : `0${timeRemaining % 60}`}
                    </span>
                </div>
            </div>
        );
    } else {
        return (
            <div className="time_remaining_block">
                <div className="time_remaining_text"><span className="time_block">{0}</span> : <span className="time_block">{0}</span> : <span className="time_block">{0}</span></div>
            </div>
        );
    }
}

export default TimeLeft;