import React, { useState } from 'react';

const Counter = () => {
  
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
  }
  
  const handleSecondsChange = (e) => {
    setSeconds(e.target.value);
  }
  
  const handleSetTime = (e) => {
    e.preventDefault();
  }
  
  return (
    <React.Fragment>
      <form type="submit">
        <label for="minutes">minutes</label>
        <input 
          type="number" 
          name="minutes" 
          id="minutes" 
          max="60" 
          value={minutes} 
          onChange={handleMinutesChange}
        />
        {minutes}
        <label for="seconds">seconds</label>
        <input 
          type="number" 
          name="seconds" 
          id="seconds" 
          max="60" 
          value={seconds}
          onChange={handleSecondsChange}  
        />
        {seconds}
      </form>
      <button type="submit" onClick={handleSetTime}>Start</button>
    </React.Fragment>
    )
}

export default Counter;