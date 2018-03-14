import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import UserProfile from './UserProfile';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      token: '',
      user: {}
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)
  }

  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  logout() {
    console.log("logging out!")
  }

  //this is where we put the life cycle hook to keep the user logged in
  //even when they hit refresh
  //adding localstorage for token?
  componentDidMount(){
    var token = localstorage.getItem('mernToken')
    if (token === 'undefined' || token === null || token === '' || token === undefined){

    }
  }

  render() {
    let theUser = this.state.user
    if (typeOf theUser === 'object' && Object.keys(theUser).length > 0) {
      return (
        <div>
          <UserProfile user={theUser} logout={this.logout} />
        </div>
      )
    } else {
      return (
        <div className="App">
          <Signup liftToken={this.liftTokenToState} />
          <Login liftToken={this.liftTokenToState} />
        </div>
      )
    }
  }
}

export default App;
