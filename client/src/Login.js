import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value})
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value})
  }

  //posting this updated info from state to the backend
  //we're then returning both (result.data) and the token (result.data.token)
  //this is both sending and receiving data???????
  handleSubmit(e) {
    e.preventDefault()
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then( result => {
      console.log(result.data)
      localStorage.setItem('mernToken', result.data.token)
      this.props.liftToken(result.data)
    }).catch( err => console.log(err))
  }

  render( ) {
    return (
      <form onSubmit={this.handleSubmit}>
        Email: <input type="text" value={this.state.email} onChange={this.handleEmailChange} /><br />
        Password: <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
        <input type="submit" value="Login!" />
      </form>
    )
  }
}

export default Login;
