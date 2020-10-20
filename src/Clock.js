import React, {useState, useEffect, useContext} from 'react';
import Digit from './Digit';
import { ThemeContext } from './ThemeContext';

const Clock = () => {
    const theme = useContext(ThemeContext);

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
          }, 1000);
    }, [time, setTime]);

    const appendPrecedingZero = number => number < 10 ? `0${number}` : number;

    const {hours, minutes, seconds}  = {
        hours: appendPrecedingZero(time.getHours()),
        minutes: appendPrecedingZero(time.getMinutes()),
        seconds: appendPrecedingZero(time.getSeconds()),
    }

    const timeString = `${hours}:${minutes}:${seconds}`.split('');

    return (
        <div className="clock-container">
            <div className="clock" aria-label={`The time is ${hours}:${minutes}:${seconds}`}>
                {timeString.map((digit, index) => <Digit key={index} digit={digit} />)}
            </div>
            <div role="presentation" className={`clock clock-clone ${theme['🎉'] ? 'clock-clone-party' : 'clock-clone-business'}`}>
                {timeString.map((digit, index) => <Digit key={index} digit={digit} />)}
            </div>
        </div>
    )
}

export default Clock;