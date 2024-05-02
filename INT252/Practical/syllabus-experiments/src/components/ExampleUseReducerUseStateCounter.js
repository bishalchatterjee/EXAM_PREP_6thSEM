import React, { useState, useReducer } from 'react';

// Define the reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

function ExampleUseReducerUseStateCounter() {
    // Initialize state using useState hook
    const [count, setCount] = useState(0);

    // Initialize state using useReducer hook
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const incrementReducer = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const decrementReducer = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>
            <h2>Counter using useState:</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <h2>Counter using useReducer:</h2>
            <p>Count: {state.count}</p>
            <button onClick={incrementReducer}>Increment</button>
            <button onClick={decrementReducer}>Decrement</button>
        </div>
    );
};

export default ExampleUseReducerUseStateCounter;