import React from 'react'

function ListChild({person}) {
  return (
    <div><h1>{person.name} {person.age}</h1></div>
  )
}

export default ListChild