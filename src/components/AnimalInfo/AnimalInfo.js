import React from 'react'
import Button from '../Button/Button';
import './AnimalInfo.css'

export default function AnimalInfo(props) {
  return (
      <div className="animal-info">
        <h2>{props.name}</h2>
        <img src={props.imageURL} alt={props.imageDescription}/>
        <span>{`Sex: ${props.sex} | Age: ${props.age}`}</span>
        <p>{`Breed: ${props.breed}`}</p>
        <p>{`Story: ${props.story}`}</p>
        {props.isAdopting && <Button text={`Adopt ${props.name}!`} handleClick={props.handleClick} />}
      </div>
  )
}

