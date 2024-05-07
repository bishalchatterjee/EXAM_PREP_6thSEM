import React , {useState } from 'react'

function ActivityCounter() {

    const initialValue = 0 ;
    const [count, setCount] = useState(initialValue) ;
    const handleCounter = () => {
        setCount(prevCount => prevCount +1) ;
    }


  return (
    <div>
      <h3>Counter Value : {count} </h3>
      <button onClick={handleCounter}>Add</button>
    </div>
  )
}

export default ActivityCounter
