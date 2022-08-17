import React from 'react'

function Employee(props) {
  return (
    <div>
      <h2> Name:{props.name} Age:{props.age}</h2>
    </div>
  )
}

export default Employee
