import React, { Component } from 'react';

import '../styles/Styles.css';

class SchatOut extends Component {
  render(props) {
    return (
      <div className="SchatOut">
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

export default SchatOut;
