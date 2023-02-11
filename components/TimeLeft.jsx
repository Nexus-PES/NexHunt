import React, { useEffect, useState } from 'react'
import { eventEnd } from './Time';

// const finalTime = Number(Math.abs(new Date().getTime() / 1000).toFixed(0)) + 180;
// const finalTime = 1667318326 + 3600+ 3600;

function TimeLeft() {
    const [ending, setEnding] = useState(false);
    const [daysLeft, setDaysLeft] = useState(0);
    const [hoursLeft, setHoursLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = eventEnd - now;

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDaysLeft(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHoursLeft(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutesLeft(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSecondsLeft(s);

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setEnding(true);
            }


        }, 1000)
        return () => clearInterval(interval);
    }, [])

    if (secondsLeft >= 0) {
        return (
            <div className="time_remaining_block">
                <div className="time_remaining_text">
                    <span className="time_block">
                        {daysLeft >= 10 ? daysLeft : `0${daysLeft}`}
                    </span> : <span className="time_block">
                        {hoursLeft >= 10 ? hoursLeft : `0${hoursLeft}`}
                    </span> : <span className="time_block">
                        {minutesLeft >= 10 ? minutesLeft : `0${minutesLeft}`}
                    </span> : <span className="time_block">
                        {secondsLeft >= 10 ? secondsLeft : `0${secondsLeft}`}
                    </span>
                </div>
            </div>
        );
    } else {
        return (
            <div className="time_remaining_block">
                <div className="time_remaining_text">
                    <span className="time_block"> 00 </span> :
                    <span className="time_block"> 00 </span> :
                    <span className="time_block"> 00 </span> :
                    <span className="time_block"> 00 </span>
                </div>
            </div>
        );
    }

    // return (
    //     <>
    //         {daysLeft} {hoursLeft} {minutesLeft} {secondsLeft}
    //     </>
    // )
}

export default TimeLeft;