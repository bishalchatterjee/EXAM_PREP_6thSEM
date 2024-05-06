import React from 'react';
import CustomHookExample from './CustomHookExample.js'

function WindowSizeComponent() {
  const { width, height } = CustomHookExample();

  return (
    <div>
      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </div>
  );
}

export default WindowSizeComponent;
