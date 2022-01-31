import React, { useState } from 'react';

const Counter = () => {
  
  const [time, setTime] = useState(0);
  
  const second = 1000;
  const minute = second * 60;
  
  let timeValue;
  
  const handleSetTime = (timeValue) => {
  }
  
  return (
    <React.Fragment>
      <form type="submit">
        <label for="minutes">minutes</label>
        <input type="number" name="minutes" id="minutes" max="60"/>
        <label for="seconds">seconds</label>
        <input type="number" name="seconds" id="seconds" max="60"/>
      </form>
      <button type="submit">Start</button>
    </React.Fragment>
    )
}

export default Counter;