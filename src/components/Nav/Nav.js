import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons' 
import { faDog } from '@fortawesome/free-solid-svg-icons' 
import './Nav.css'

export default function Nav() {
  return (
    <nav role="navigation" className="nav-bar">
      <Link to={'/'} className="link">
        <FontAwesomeIcon icon={faCat} className="cat icon" color="black"/>
        <h1>Adopt A Pet!</h1>
        <FontAwesomeIcon icon={faDog} className="dog icon" color="black"/>
      </Link>
    </nav>
  )
}
