import React from 'react'

function ChildComponent(props) {
  return (
    <div><br/>
        <button onClick={()=>props.greetparent("Logistic")}>Show Alert From Parent</button>
    </div>
  )
}

export default ChildComponent