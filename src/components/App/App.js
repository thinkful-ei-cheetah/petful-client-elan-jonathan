import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Nav from '../Nav/Nav'
import './App.css'
import HomePage from '../HomePage/HomePage'

class App extends Component {
  state = {
    cats: [
      {
        id: 1,
        imageURL: "https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg",
        imageDescription: "Orange bengal cat with black stripes lounging on concrete.",
        name: "Fluffy",
        sex: "Female",
        age: 2,
        breed: "Bengal",
        story: "Thrown on the street"
      }
    ],
    dogs: [
      {
        id: 2,
        imageURL: "http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg",
        imageDescription: "A smiling golden-brown golden retreiver listening to music.",
        name: "Zeus",
        sex: "Male",
        age: 3,
        breed: "Golden Retriever",
        story: "Owner Passed away"
      }
    ],
    users: [],
    currentUser: '',
    isAdopting: false
  }

  async componentDidMount() {
    const response = await axios.get('http://localhost:8080/api/user')
    const users = await response.data
    this.setState({
      users: [users]
    })
    setInterval(async () => {
      const response = await axios.get('http://localhost:8080/api/user')
      const users = await response.data
      this.setState({
        users: [users]
      })
    }, 300000)
  }

  handleAddToAdoptQueue = async () => {
    const response = await axios.post('http://localhost:8080/api/user')
    const user = await response.data
    this.setState({ isAdopting: true, currentUser: user.currentUser })
    console.log(user) 
  }

  handleAdoptCat = async () => {
    const { currentUser } = this.state
    const { users } = this.state
    if(currentUser === users[0].nextinline.data.entertime) {
      axios.delete('http://localhost:8080/api/cat')
      axios.delete('http://localhost:8080/api/user', {
        entertime: currentUser
      })
    }
  }

  handleAdoptDog = async () => {
    const { currentUser } = this.state
    const { users } = this.state
    if(currentUser === users[0].nextinline.data.entertime) {
      axios.delete('http://localhost:8080/api/dog')
      axios.delete('http://localhost:8080/api/user', {
        entertime: currentUser
      })
    }
  }

  render() {
    const { cats, dogs, users } = this.state
    return (
      <div className="App">
        <nav className="nav-bar" role="navigation">
          <Nav />
        </nav>
        <main className="app-body">
          <Switch>
            <Route
              exact path={"/"}
              render={(routeProps) => (
                <HomePage 
                  {...routeProps} 
                  cats={cats} 
                  dogs={dogs} 
                  users={users} 
                  handleClick={this.handleAddToAdoptQueue} 
                  isAdopting={this.state.isAdopting}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
