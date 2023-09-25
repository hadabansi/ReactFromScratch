import React from 'react'

function Company({com}) {
    if(com==="Infotech"){
        throw new Error("Not a Company name")
    }
  return (
    <div><h1>{com}</h1></div>
  )
}

export default Company