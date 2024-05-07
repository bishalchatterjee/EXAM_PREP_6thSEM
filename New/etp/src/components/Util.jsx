import { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        // Cleanup function to clear interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return <div>Seconds Elapsed: {seconds}</div>;
};

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            Counter: {count}
            &ensp;<button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
            &ensp;<button onClick={() => setCount((prevCount) => prevCount - 1)}>Decrement</button>
            <br />
        </div>
    );
};


const Util = () => {
    return (
        <>
            <div style={{ display: 'flex' }} >
                <div>Use of useState hook:-</div>    &ensp;<Counter />
            </div>
            <br />
            <div style={{ display: 'flex' }} >
                <div>Use of useEffect hook:-</div>
                &ensp;<Timer />
            </div>
        </>
    )
}

export default Util
