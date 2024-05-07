import React from 'react'

function PersonList() {

    const Person = [{
        name: "John Doe",
        age: 32,
        occupation: "Software Developer"
    },{
        name: "Jane Smith",
        age: 28,
        occupation: "Designer",
    },
    {
      name:"Tom Green",
      age:45,
      occupation:"Manager"
    }]
  return (
    <div>
      {Person.map((person,index) =>(
          <div key={index}>
              <h1>{person.name}</h1>
              <p>Age:{person.age}<br/> Occupation:{person.occupation}</p>
          </div>
      ))}
    </div>
  )
}

export default PersonList
