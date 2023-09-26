import React, { useContext } from 'react'
import { CountContext } from './GlobalStateManagement'


function ComponentXChild() {
    const countcontext=useContext(CountContext)
  return (
    <div>ComponentXChild
        <button onClick={countcontext.CountIncrement}>Increment</button>
        <button onClick={countcontext.CountDecrement}>Decrement</button>
        <button onClick={countcontext.CountReset}>Reset</button>
    </div>
  )
}

export default ComponentXChild