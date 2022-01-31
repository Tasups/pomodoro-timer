import React, { useContext } from 'react';

import { TimeContext } from './countcontainer';


const Countdown = () => {
  
  const { minutes, setMinutes } =  useContext(TimeContext);
  const { seconds, setSeconds } = useContext(TimeContext);
  
  return(
    <React.Fragment>
      <span>{minutes}</span>
      <span>{seconds}</span>
    </React.Fragment>
    )
}

export default Countdown;