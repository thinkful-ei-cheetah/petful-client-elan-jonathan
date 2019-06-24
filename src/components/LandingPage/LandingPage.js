import React, { Component } from 'react'
import Header from '../Header/Header'

export default class LandingPage extends Component {
  handleRouteToHome = () => {
    this.props.history.push('/home')
  }
  render() {
    return (
      <div>
        <Header handleClick={this.handleRouteToHome}/>
      </div>
    )
  }
}
