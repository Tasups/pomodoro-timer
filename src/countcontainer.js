import React from 'react';

import { TimeProvider } from './TimeContext';
import Counter from './counter';
import Countdown from './countdown';

const CountContainer = () => {
  
  return(
    <TimeProvider>
      <Counter />
      <Countdown />
    </TimeProvider>
    )
}

export default CountContainer;