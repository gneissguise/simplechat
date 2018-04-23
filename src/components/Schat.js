import React, { Component } from 'react';

import SchatBox from './SchatBox';
import SchatForm from './SchatForm';
import SchatLogin from './SchatLogin';

import '../styles/Styles.css';

class Schat extends Component {
  constructor(props) {
    super(props);

    this.state = { 
                    schatLog: [],
                    userName: '',
                    loggedIn: false
                  };

    this.sendMessage = this.sendMessage.bind(this);
    this.updateLogin = this.updateLogin.bind(this);
  }

  sendMessage(newMessage) {
    let newArray = this.state.schatLog.slice();
    newArray.push({ user: this.state.userName,
                    msg: newMessage });
    this.setState({ schatLog: newArray });
  }

  updateLogin(userTxt) {
    this.setState({ userName: userTxt,
                    loggedIn: true
                  });
  }
  
  render() {
    let mainPanel = null;
    let loggedIn = this.state.loggedIn;

    if (!loggedIn) {
      mainPanel = <div className="Schat">
                    <SchatLogin
                      userName={this.state.userName}
                      updateLogin={this.updateLogin} />
                  </div>;
    } else {
      mainPanel = <div className="Schat">
                    <SchatBox
                      schatLog={this.state.schatLog}
                      userName={this.state.userName} />
                    <SchatForm
                      sendMessage={this.sendMessage} />
                    <p>Current User: {this.state.userName}</p>
                  </div>;
    }

    return (
      <div>
        {mainPanel}
      </div>
    );
  }
}

export default Schat;
