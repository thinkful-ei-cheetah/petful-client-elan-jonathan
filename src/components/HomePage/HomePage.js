import React, { Component } from 'react'
import Header from '../Header/Header'
import AnimalInfo from '../AnimalInfo/AnimalInfo';


export class HomePage extends Component {
  static defaultProps = {
    cats: [],
    dogs: []
  }

  render() {
    const { cats, dogs } = this.props
    console.log(this.props)
    return (
      <div className="home-page">
        <Header />
        <AnimalInfo 
          id={dogs[0].id} 
          name={dogs[0].name} 
          imageURL={dogs[0].imageURL} 
          imageDescription={dogs[0].imageDescription} 
        />
        <AnimalInfo 
          id={cats[0].id} 
          name={cats[0].name} 
          imageURL={cats[0].imageURL} 
          imageDescription={cats[0].imageDescription} 
        />

      </div>
    )
  }
}

export default HomePage
