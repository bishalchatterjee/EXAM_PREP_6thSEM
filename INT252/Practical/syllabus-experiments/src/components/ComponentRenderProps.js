import React from 'react';

// Component A
export function ComponentA ({ render }) {
  // Shared functionality to be provided to other components
  const sharedFunctionality = () => {
    return "This is shared functionality from Component A";
  };

  // Render the child component with the shared functionality as a prop
  return render(sharedFunctionality);
};

// Component B
export function ComponentB ({ render }) {
  // Shared functionality to be provided to other components
  const sharedFunctionality = () => {
    return "This is shared functionality from Component B";
  };

  // Render the child component with the shared functionality as a prop
  return render(sharedFunctionality);
};
