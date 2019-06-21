import React from 'react'
import Button from '../Button/Button';

export default function AnimalInfo(props) {
  return (
      <div className="animal-info">
        <h2>{props.name}</h2>
        <img src={props.imageURL} alt={props.imageDescription}/>
        <span>{`${props.sex} || Age: ${props.age}`}</span>
        <p>{props.breed}</p>
        <p>{`Story: ${props.story}`}</p>
        {props.isAdopting && <Button text="Adopt me!" handleClick={props.handleClick} />}
      </div>
  )
}

