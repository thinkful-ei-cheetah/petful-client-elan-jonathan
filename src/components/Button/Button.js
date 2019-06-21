import React from 'react'

export default function Button(props) {
  return (
    <div className="button-container">
      <button 
        type="button"
        onClick={props.handleClick}>
        {props.text}
      </button>
    </div>
  )
}

Button.defaultProps = {
  handleClick: () => {},
  text: ''
}
