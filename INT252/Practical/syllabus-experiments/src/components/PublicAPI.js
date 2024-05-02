import React, { useState, useEffect } from 'react';

function PublicAPI() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.mockaroo.com/api/143ddde0?count=10&key=f2380f80");
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Public API Data</h1>
            {data.map((item) => (
                <div key={item.id}>
                    <p>{item.id + '.' + item.first_name + ' ' + item.last_name}</p>
                </div>
            ))}
        </div>
    );
};

export default PublicAPI;