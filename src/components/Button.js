import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClock}>{props.children}
   
    </button>
  )
}

export default Button
