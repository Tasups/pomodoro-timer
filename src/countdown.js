import React, { useContext } from 'react';
import { useTime, useTimeUpdate } from './TimeContext';

import { TimeContext, handleStart } from './TimeContext';


const Countdown = () => {
  
  const [seconds, setSeconds] = useContext(TimeContext);
  const [minutes, setMinutes] = useContext(TimeContext);
  
  return(
    <React.Fragment>
      <span>{minutes}</span>
      :
      <span>{seconds}</span>
      <button onClick={handleStart}>Start Timer</button>
    </React.Fragment>
    );
};

export default Countdown;