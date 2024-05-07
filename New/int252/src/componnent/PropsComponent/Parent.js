import React , {useState} from 'react'

function Parent() {
    const [text , setText] = useState("parent");

    const handleClick = () =>{
        setText("child")
    }

  return (
    <div>
        <p>{text}</p>
        <button onClick={handleClick}>Change Text</button>
    </div>
  )
}

export default Parent
