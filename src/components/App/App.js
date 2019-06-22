import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Nav from '../Nav/Nav'
import './App.css'
import HomePage from '../HomePage/HomePage'

class App extends Component {
  state = {
    cats: [],
    dogs: [],
    users: [],
    currentUser: '',
    isAdopting: false,
    error: null
  }
  //https://petful-server-elan-jonathan.herokuapp.com/api/cat
  async componentDidMount() {
    const response = await axios.get('https://petful-server-elan-jonathan.herokuapp.com/api/user')
    const users = await response.data
    const cats = await axios.get('https://petful-server-elan-jonathan.herokuapp.com/api/cat')
    const catData = await cats.data
    const dogs = await axios.get('https://petful-server-elan-jonathan.herokuapp.com/api/dog')
    const dogData = await dogs.data
    this.setState({
      users: [users],
      cats: catData.data,
      dogs: dogData.data
    })

    setInterval(async () => {
      const response = await axios.get('https://petful-server-elan-jonathan.herokuapp.com/api/user')
      const users = await response.data
      this.setState({
        users: [users]
      })
    }, 5000)
  }

  handleAddToAdoptQueue = async () => {
    const response = await axios.post('https://petful-server-elan-jonathan.herokuapp.com/api/user')
    const user = await response.data
    this.setState({ isAdopting: true, currentUser: user.nextinline.data.entertime })
  }

  handleAdoptCat = async () => {
    const { currentUser } = this.state
    const { users } = this.state
    if(currentUser === users[0].nextinline.data.entertime) {
      await axios.delete('https://petful-server-elan-jonathan.herokuapp.com/api/cat')
      await axios.delete('https://petful-server-elan-jonathan.herokuapp.com/api/user', {
        entertime: currentUser
      })
      const cats = await axios.get('https://petful-server-elan-jonathan.herokuapp.com/api/cat')
      const catData = cats.data
      this.setState({ cats: catData.data, isAdopting: false })
    }
  }

  handleAdoptDog = async () => {
    const { currentUser } = this.state
    const { users } = this.state
    if(currentUser === users[0].nextinline.data.entertime) {
      await axios.delete('https://petful-server-elan-jonathan.herokuapp.com/api/dog')
      await axios.delete('https://petful-server-elan-jonathan.herokuapp.com/api/user', {
        entertime: currentUser
      })
    }
    const dogs = await axios.get('https://petful-server-elan-jonathan.herokuapp.com/api/dog')
    const dogData = dogs.data
    this.setState({ dogs: dogData.data, isAdopting: false })
  }

  render() {
    const { cats, dogs, users, error } = this.state
    return (
      <div className="App">
        <Nav />
        <main className="app-body">
        {error && <p className="error">{error}</p>}
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
                  handleAdoptCat={this.handleAdoptCat}
                  handleAdoptDog={this.handleAdoptDog}
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
