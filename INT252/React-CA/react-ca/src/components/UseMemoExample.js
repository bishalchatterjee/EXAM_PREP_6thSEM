import React, { useMemo } from 'react';

function ExpensiveCalculation({ value }) {
  const expensiveValue = useMemo(() => {
    // Expensive calculation
    return value * 2;
  }, [value]);

  return <div>{expensiveValue}</div>;
}

export default ExpensiveCalculation;
