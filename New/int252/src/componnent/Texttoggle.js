import React, { useState } from 'react'

function Texttoggle() {
    const intialText = "hey welcome! pls Subscribe";
    const [text, setText] = useState(intialText) ;

    const handleClick = ()=>{
        setText("Thanks for subscribed")
    }
  return (
    <div>
       <h1>{text}</h1>   
       <button onClick={handleClick}>Subscribe</button>
      
    </div>
  )
}

export default Texttoggle
