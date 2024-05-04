import React, { useState, useEffect } from 'react';

//Create a widget that renders the current time in HH:MM:SS format using a 7 segment digital display. You are free to choose touse 12 hour or a 24 hour display

const QuestionEight = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');
            setTime(`${hours}:${minutes}:${seconds}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Current Time:</h1>
            <div className="seven-segment-display">{time}</div>
        </div>
    );
};

export default QuestionEight;