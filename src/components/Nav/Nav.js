import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat } from '@fortawesome/free-solid-svg-icons' 

export default function Nav() {
  return (
    <Link to={'/'}>
      <FontAwesomeIcon icon={faCat} size="6x" color="black"/>
      Adopt A Pet!
    </Link>
  )
}
