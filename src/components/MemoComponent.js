import React from 'react'

function MemoComponent(props) {
    console.log("Memo Component")
  return (
    <div><h1>MemoComponent {props.name}</h1></div>
  )
}

export default React.memo(MemoComponent);