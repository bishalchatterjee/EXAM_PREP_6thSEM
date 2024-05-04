//Develop a file upload component to upload multiple files simultaneously.
//It should display indicators for each file and should display a success or error message after the upload

import React, { useState } from 'react';

const QuestionTwo = () => {
    const [files, setFiles] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
    };

    const handleUpload = () => {
        // Perform the upload logic here
        // You can use libraries like axios or fetch to send the files to the server

        // Display success or error message based on the upload result
        const uploadSuccess = true; // Replace with the actual upload result
        if (uploadSuccess) {
            setSuccessMessage('Files uploaded successfully');
            setErrorMessage('');
        } else {
            setSuccessMessage('');
            setErrorMessage('Error uploading files');
        }
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {files.map((file, index) => (
                <div key={index}>{file.name}</div>
            ))}
            {successMessage && <div>{successMessage}</div>}
            {errorMessage && <div>{errorMessage}</div>}
        </div>
    );
};

export default QuestionTwo;