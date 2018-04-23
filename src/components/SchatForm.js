import React, { Component } from 'react';

import '../styles/Styles.css';

class SchatForm extends Component {

  constructor(props) {
    super(props);
    this.state = { schatMessage: '' };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    this.schatTxt.focus();
  }

  handleUpdate(event) {
    this.setState({ schatMessage: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendMessage();
  }

  sendMessage() {
    this.props.sendMessage(this.state.schatMessage);
    this.setState({ schatMessage: '' });
  }

  render() {
    return (
      <div className="SchatForm">
        <form onSubmit={this.handleSubmit}>
        <input type="text" 
          className="schatTxt"
          ref={(input) => {this.schatTxt = input; }}
          onChange={this.handleUpdate}
          value={this.state.schatMessage} 
          placeholder="Enter a message..." 
          tabindex="1" />
        <input type="submit" 
          value="Send" 
          tabindex="2" />
      </form>
      </div>
    );
  }
}

export default SchatForm;
