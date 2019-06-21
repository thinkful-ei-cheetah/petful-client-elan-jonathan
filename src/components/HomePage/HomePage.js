import React, { Component } from 'react'
import Header from '../Header/Header'
import AnimalInfo from '../AnimalInfo/AnimalInfo';
import axios from 'axios'
import Button from '../Button/Button';


export class HomePage extends Component {
  static defaultProps = {
    cats: [],
    dogs: [],
    handleClick: () => {},
    users: [],
    handleAdoptDog: () => {},
    handleAdoptCat: () => {},
    isAdopting: false
  }
  
  render() {
    let { cats, dogs, isAdopting, handleAdoptDog, handleAdoptCat, users } = this.props
    return (
      <div className="home-page">
        <Header /> 
        {isAdopting && (users[0].count <= 1 || users[0].count === undefined ? `It's your turn to adopt! You have 5 minutes to choose an animal to adopt.` : `${users[0].count} in line ahead of you to adopt.`)}
        {!isAdopting && <Button text={'Click here to start adopting!'} handleClick={this.props.handleClick} />}
        <AnimalInfo 
          name={dogs.name} 
          imageURL={dogs.imageURL} 
          imageDescription={dogs.imageDescription} 
          sex={dogs.sex}
          age={dogs.age}
          breed={dogs.breed}
          story={dogs.story}
          handleClick={handleAdoptDog}
          isAdopting={isAdopting}
        />
        <AnimalInfo 
          id={cats.id} 
          name={cats.name} 
          imageURL={cats.imageURL} 
          imageDescription={cats.imageDescription} 
          sex={cats.sex}
          age={cats.age}
          breed={cats.breed}
          story={cats.story}
          handleClick={handleAdoptCat}
          isAdopting={isAdopting}
        />

      </div>
    )
  }
}

export default HomePage
