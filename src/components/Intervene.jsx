import React from 'react'
import MyComponent from './MyComponent'

function Intervene(props) {
  return (
    <MyComponent colour="red" {...props} message="override" />
  )
}

export default Intervene