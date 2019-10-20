import React, { Component } from 'react';

class Dimension extends Component {
  state = { width:0, height: 0, selectedEmoji:'😊' }
  render() {
    return ( <div>
      <div>
        <div className="hello"></div>
      </div>
    </div> );
  }
}

export default Dimension;