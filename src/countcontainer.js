import React, { useState } from 'react';

import Counter from './counter';
import Countdown from './countdown';

export const TimeContext = React.createContext();

const CountContainer = () => {
  
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  return(
    <TimeContext.Provider value={{minutes, setMinutes, seconds, setSeconds}}>
      <Counter />
      <Countdown />
    </TimeContext.Provider>
    )
}

export default CountContainer;