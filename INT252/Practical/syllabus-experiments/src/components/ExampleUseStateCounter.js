import { useState } from "react";

function ExampleUseStateCounter() {
    const[count, setCount] = useState(0);

    function handleClickIncrement(){
        setCount(count + 1);
    }

    function handleClickDecrement(){
        setCount(count - 1);
    }
    
    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={handleClickIncrement}>Increment</button>
            <button onClick={handleClickDecrement}>Decrement</button>
        </div>
    )
}

export default ExampleUseStateCounter;