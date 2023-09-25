import React from 'react'

function ConceptChildProps(props) {
  return (
    <div>{props.name}<br/>
    {props.children}</div>
  )
}

export default ConceptChildProps