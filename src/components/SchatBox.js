import React, { Component } from 'react';

import SchatIn from './SchatIn';
import SchatOut from './SchatOut';

import '../styles/Styles.css';

class SchatBox extends Component {

  constructor(props) {
    super(props);
    
    this.renderMessages = this.renderMessages.bind(this);
    this.countMessages = this.countMessages.bind(this);
    this.formatMessage = this.formatMessage.bind(this);
  }

  formatMessage(user, msg) {
   if (user === this.props.userName) {
    return (
      <SchatOut
        schatMessage={msg}
        fromUser={user} />
    );
  } else {
    return (
      <SchatIn
        schatMessage={msg}
        fromUser={user} />
    );
  }
  }

  renderMessages() {   
    if (this.props.schatLog.length === 0) {
      return (
        <h5>Welcome to Schat, watch your step.</h5>
      );
    } else {
      return this.props.schatLog.map(({ user, msg }) =>  
        this.formatMessage(user, msg)
        );      
    }
  }

  countMessages() {
    return (
      <p>{this.props.schatLog.length}</p>
    );
  }

  render() {
    return (
      <div className="SchatBox">
          {this.renderMessages()}
      </div>
    );
  }
}

export default SchatBox;
