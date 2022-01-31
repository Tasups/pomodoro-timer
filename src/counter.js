import React, { useContext, useState } from 'react';
import { TimeContext } from './countcontainer';

const Counter = () => {
  
  const { minutes, setMinutes } = useContext(TimeContext);
  const { seconds, setSeconds } = useContext(TimeContext);
  
  const [newMinutes, setNewMinutes] = useState(minutes);
  const [newSeconds, setNewSeconds] = useState(seconds);

  const handleMinutesChange = (e) => {
    setNewMinutes(e.target.value);
  }
  
  const handleSecondsChange = (e) => {
    setNewSeconds(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMinutes(newMinutes);
    setSeconds(newSeconds);
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
          min="0"
          value={newMinutes} 
          onChange={handleMinutesChange}
        />
        {minutes}
        <label for="seconds">seconds</label>
        <input 
          type="number" 
          name="seconds" 
          id="seconds" 
          max="60"
          min="0"
          value={newSeconds}
          onChange={handleSecondsChange}  
        />
        {seconds}
      </form>
      <button type="submit" onClick={handleSubmit}>Start</button>
    </React.Fragment>
    )
}

export default Counter;