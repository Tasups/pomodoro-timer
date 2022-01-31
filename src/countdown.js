import React, { useContext } from 'react';

import { TimeContext } from './countcontainer';

const sound = new Audio("https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg");

const Countdown = () => {
  
  const { minutes, setMinutes } =  useContext(TimeContext);
  const { seconds, setSeconds } = useContext(TimeContext);
  
  const handleStart = (e) => {
    e.preventDefault();
    if (seconds === 0 && minutes === 0) {
      alert("Countdown Complete!");
      sound.play();
    } else if (seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }
    setInterval(handleStart, 1000);
  };
  
  return(
    <React.Fragment>
      <span>{minutes >= 10 ? {minutes} : `0${minutes}`}</span>
      :
      <span>{seconds >= 10 ? {seconds} : `0${seconds}`}</span>
      <button onClick={handleStart}>Start Timer</button>
    </React.Fragment>
    );
};

export default Countdown;