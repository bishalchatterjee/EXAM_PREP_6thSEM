import { useState } from 'react';

const GradeToggle = () => {
    const [grade, setGrade] = useState('');

    const handleInputChange = (event) => {
        setGrade(event.target.value);
    };

    return (
        <div>
            <h2>Student Grade System</h2>
            <select value={grade} onChange={handleInputChange}>
                <option value="">Select Grade</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
            {grade && (
                <div>
                    <h3>Grade Information</h3>
                    {grade === 'A' && <p>Excellent! Keep up the good work.</p>}
                    {grade === 'B' && <p>Good job! You're doing well.</p>}
                    {grade === 'C' && <p>Not bad. Keep improving.</p>}
                    {grade === 'D' && <p>It's okay. You can do better.</p>}
                    {grade === 'F' && <p>Uh oh! You need to work harder.</p>}
                </div>
            )}
        </div>
    );
};

export default GradeToggle;
