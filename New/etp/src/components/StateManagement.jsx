import PropTypes from 'prop-types';
import { useReducer, useState } from 'react';

const UseStateComp = ({ number }) => {
    const [count, setCount] = useState(number)
    return (
        <>
            count:    {count}
            <button onClick={() => setCount((prev) => prev + 1)}>
                Increment
            </button>
            <button onClick={() => setCount((prev) => prev - 1)}>
                Decrement
            </button>
        </>
    )
}

const UseReducerComp = ({ number }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer, number)
    return (
        <>
            count:  {count}
            <button onClick={() => dispatch({ type: 'increment' })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })} >
                Decrement
            </button >
        </>
    )
}

const StateManagement = () => {
    return (
        <>
            <div style={{ margin: '20px', color: "red", display: 'flex', justifyContent: 'space-between' }}>
                Using useState   <UseStateComp number={0} />
            </div>
            <div style={{ margin: '20px', color: "blue", display: 'flex', justifyContent: 'space-between' }}>
                Using useReducer   <UseReducerComp number={0} />
            </div>
        </>
    )
}

UseStateComp.propTypes = {
    number: PropTypes.number
}

export default StateManagement