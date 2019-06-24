import React, { Component } from 'react'
import AnimalInfo from '../AnimalInfo/AnimalInfo';
import Button from '../Button/Button';
import './HomePage.css'


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
        {isAdopting && (users[0].count <= 1 || users[0].count === undefined ?
             <p className="line-info">{`It's your turn to adopt! You have 5 minutes to choose an animal to adopt.`}</p>
          :  <p className="line-info">{`${users[0].count} in line ahead of you to adopt.`}</p>)}
        {!isAdopting && <div className="btn-container">
          <Button text={'Click here to put yourself in the adoption queue!'} handleClick={this.props.handleClick} />
        </div>}
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
