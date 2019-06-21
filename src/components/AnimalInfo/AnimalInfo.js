import React from 'react'
import { Link } from 'react-router-dom'

export default function AnimalInfo(props) {
  return (
      <div className="animal-info">
        <h2>{props.name}</h2>
        <img src={props.imageURL} alt={props.imageDescription}/>
        <button type="button">
          <Link to={`/adopt/${props.id}`}>
            Adopt Me!
          </Link>
        </button>
      </div>
  )
}

