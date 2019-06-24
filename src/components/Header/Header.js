import React from 'react'
import './Header.css'
import Button from '../Button/Button'

export default function Header(props) {
  return (
    <header className="header">
      <h1>Welcome to Adopt An Animal!</h1>
      <p className="about">Click the button below to get in line to adopt one of these precious animals! Once you enter the queue, you will be notified when it's your turn to select your pet.</p>
      <Button text='Start adoping' handleClick={props.handleClick} />
    </header>
  )
}
