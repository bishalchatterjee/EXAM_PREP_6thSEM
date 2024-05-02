import {useState, useEffect} from 'react';

function ExampleUseEffectTimer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);        
    
    
        return() => clearInterval(intervalId);

    }, []);


    return(
        <div>
            <p>Seconds: {seconds}</p>
        </div>
    );
}

export default ExampleUseEffectTimer;