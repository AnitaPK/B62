import React from 'react'
import "./Button.css"

const Button = (props) => {
    console.log(props)

  return (
    <button className='custom_button'>
      {props.name}
    </button>
  )
}

export default Button
