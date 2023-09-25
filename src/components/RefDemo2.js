import React from 'react'

// function RefDemo2() {
//   return (
//     <div>RefDemo2</div>
//   )
// }
const RefDemo2=React.forwardRef((props,ref)=>{
    return (
        <div>
        <input type='text' ref={ref}/>
        </div>
    )
})

export default RefDemo2