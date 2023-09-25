import React from 'react'
import ListChild from './ListChild'

function ListRendering() {
    const arr=['Bansi','Gunjan','Logistic']
    const arr2=[{
        id:1,
        name:'Bansi',
        age:18
    },
    {
        id:2,
        name:'Gunjan',
        age:14
    }]
    var arrlist2=arr2.map(i=><ListChild key={i.id} person={i}/>)
    var arrlist=arr.map((i,index)=><h1 key={index}>{index} {i}</h1>)
  return <div>{arrlist} {arrlist2}</div>
}

export default ListRendering