import React from 'react';

// Define a higher order component (HOC) named withLog
function withLog (WrappedComponent) {
  // Return a new component
  return (props) => {
    // Log the component name and props before rendering
    console.log(`Rendering ${WrappedComponent.name} with props:`, props);
    
    // Render the wrapped component with the provided props
    return <WrappedComponent {...props} />;
  };
};

// Define a functional component named MyComponent
function MyComponent(props) {
  return <div>Hello, {props.name}!</div>;
};

// Wrap MyComponent with the withLog HOC
const HigherOrderComponent = withLog(MyComponent);


export default HigherOrderComponent;
