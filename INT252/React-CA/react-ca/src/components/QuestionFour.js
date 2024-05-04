// Create controlled components for Student application that share functionality to another student by using render props

import React, { useState } from 'react';

const StudentForm = ({ render }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        render({ name, age });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Age:
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

const Student = () => {
    const handleFormSubmit = (data) => {
        // Handle form submission data
        console.log(data);
    };

    return (
        <div>
            <h1>Student Application</h1>
            <StudentForm render={handleFormSubmit} />
        </div>
    );
};

export default Student;