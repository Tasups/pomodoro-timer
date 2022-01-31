import React, { useContext, useState } from 'react';

const TimeContext = React.createContext();
const TimeUpdateContext = React.createContext();

const sound = new Audio("https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg");

export function useTime () {
  return useContext(TimeContext);
}

export function useTimeUpdate () {
  return useContext(TimeUpdateContext);
}

let handleStart;
let handleSubmit;

export function TimeProvider ({ children }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMinutes(e.target.value);
    setSeconds(e.target.value);
  };
  
  const handleStart = () => {
    if (seconds === 0 && minutes === 0) {
      alert("Countdown Complete!");
      sound.play();
    } else if (seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else {
      setSeconds(seconds - 1);
    }
    console.log(`Minutes: ${minutes}`);
    console.log(`Seconds: ${seconds}`);
    setInterval(handleStart, 1000);
  };
  
  return(
    <TimeContext.Provider value={{ seconds: [seconds, setSeconds], minutes: [minutes, setMinutes] }}>
      <TimeUpdateContext.Provider value={{ handleStart, handleSubmit }}>
        {children}
      </TimeUpdateContext.Provider>
    </TimeContext.Provider>
    )
  }
  
  export default {handleSubmit, handleStart}