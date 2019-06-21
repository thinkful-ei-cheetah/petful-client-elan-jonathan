import React, { Component } from 'react'
import Header from '../Header/Header'
import AnimalInfo from '../AnimalInfo/AnimalInfo';
import axios from 'axios'
import Button from '../Button/Button';


export class HomePage extends Component {
  static defaultProps = {
    cats: [],
    dogs: [],
    handleClick: () => {}
  }
  
  constructor(props) {
    super(props)

    this.state = {
      users: {}
    }
  }

  async componentWillMount() {
    const response = await axios.get('http://localhost:8080/api/user')
    const users = await response.data
    console.log(users)
    this.setState({ users: users })
  }
  
  render() {
    const { users } = this.state
    let { cats, dogs, isAdopting } = this.props
    cats = cats[0]
    dogs = dogs[0]
    console.log(users)
    return (
      <div className="home-page">
        <Header /> 
        {users.count === 1 ? `It's your turn to adopt!` : `${users.count} in line ahead of you.`}
        {!isAdopting && <Button text={'Click here to start adopting!'} handleClick={this.props.handleClick} />}
        <AnimalInfo 
          id={dogs.id} 
          name={dogs.name} 
          imageURL={dogs.imageURL} 
          imageDescription={dogs.imageDescription} 
          sex={dogs.sex}
          age={dogs.age}
          breed={dogs.breed}
          story={dogs.story}
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
        />

      </div>
    )
  }
}

export default HomePage
