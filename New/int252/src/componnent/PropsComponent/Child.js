import React from 'react';

function Child(props) {
  return (
    <div>
      <button onClick={props.eventHandler}>Click me</button>
    </div>
  );
}

export default Child;

