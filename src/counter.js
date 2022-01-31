import React, { useContext } from 'react';
import { TimeContext } from './countcontainer';
import { useTime, useTimeUpdate, handleSubmit } from './TimeContext';


const Counter = () => {
  
  const [seconds, setSeconds] = useContext(TimeContext);
  const [minutes, setMinutes] = useContext(TimeContext);

  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
  }
  
  const handleSecondsChange = (e) => {
    setSeconds(e.target.value);
  }
  
  return (
    <React.Fragment>
      <form type="submit">
        <label htmlFor="minutes">minutes</label>
        <input 
          type="number" 
          name="minutes" 
          id="minutes" 
          max="60"
          min="0"
          value={minutes} 
          onChange={handleMinutesChange}
        />
        <label htmlFor="seconds">seconds</label>
        <input 
          type="number" 
          name="seconds" 
          id="seconds" 
          max="59"
          min="0"
          value={seconds}
          onChange={handleSecondsChange}  
        />
      </form>
      <button type="submit" onClick={handleSubmit}>Start</button>
    </React.Fragment>
    )
}

export default Counter;