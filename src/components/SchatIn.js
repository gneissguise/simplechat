import React, { Component } from 'react';

import '../styles/Styles.css';

class SchatIn extends Component {
  render(props) {
    return (
      <div className="SchatIn">
        <strong>      
          {this.props.fromUser}: 
        </strong>
        <span>
          {this.props.schatMessage}
        </span>
      </div>
    );
  }
}

export default SchatIn;
