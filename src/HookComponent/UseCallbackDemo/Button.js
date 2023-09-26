import React from 'react'

function Button({handleclick,children}) {
    console.log(children)
  return (
   <>
   <button onClick={handleclick}>{children}</button>
   </>
  )
}

export default React.memo(Button)