import React, { useState, useEffect } from 'react';

const Clock2 = () => {
  const [state, setState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setState(new Date()), 1000);
    return () => {
      clearInterval(state);
    };
  });

  return <div className='clock'>{state.toLocaleTimeString()}</div>;
};

export default Clock2;
