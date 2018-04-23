import React, { Component } from 'react';

class SchatLogin extends Component {

  constructor(props) {
    super(props);
    
    this.state = { userName: '' };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateLogin = this.updateLogin.bind(this);
  }

  handleUpdate(event) {
    this.setState({ userName: event.target.value });
  }

  updateLogin() {
    this.props.updateLogin(this.state.userName);
    this.setState({ userName: ''});
  }

  render() {

      return (
        <div className="SchatLogin">
          <input type="text" 
            value={this.state.userName}
            onChange={this.handleUpdate}
            placeholder="Username:" />
          <button 
            name="loginBtn"
            onClick={this.updateLogin}>
            Log in
          </button>
        </div>
      );
  }
}

export default SchatLogin;
