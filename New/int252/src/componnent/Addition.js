import React, { useState } from 'react';
function Addition() {
    const [add, setAdd] = useState(0);

    const addNumber = () => {
        const num1 = document.getElementById('num1').value;
        const num2 = document.getElementById('num2').value;
        setAdd(parseInt(num1) + parseInt(num2));
    }

    return (
        <div>
            <h2>Addition</h2>
            <label> Enter First number : </label>
            <input type="text" name="num1" id='num1'/>
            <br/><br/>
            <label>Enter Second Number:</label>
            <input type="text" name="num2" id="num2" /><br /><br />
            <button onClick={addNumber}>Add</button><br />
            <p> sum of number is : {add} </p>
        </div>
    )
}

export default Addition;