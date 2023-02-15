import { nanoid } from 'nanoid'
import React from 'react'


function List({items=[]}) {
  return (
    <>
    <ul>
    {items.map(person) => (
      
      <PersonCard key={nanoid()} {...person} />
    ))
    </ul>
    </>
  )
}

export default List