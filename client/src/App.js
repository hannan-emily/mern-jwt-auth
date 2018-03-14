import React, { Component } from 'react';
import './App.css';

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

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
