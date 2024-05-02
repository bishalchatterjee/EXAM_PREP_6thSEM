import React, { useState, useEffect } from 'react';

function FunctionalComponentLifecycle() {
    const [state, setState] = useState(null);

    useEffect(() => {
        console.log('Component did mount');
        return () => {
            console.log('Component will unmount');
        };
    }, []);

    useEffect(() => {
        console.log('Component did update');
    });

    console.log('Render called');
    return (
        <div>
            {/* Your component JSX */}
        </div>
    );
};

export default FunctionalComponentLifecycle;
