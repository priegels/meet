import React, { Component } from 'react';

class NumberOfEvents extends Component {

  render() {
    return (
      <div className="NumberOfEvents">
        <h4>Number of Events</h4>
        <input 
          className="number-of-events"
          type="number"
          value={this.props.numberOfEvents}
          onChange={(e) => this.props.updateNumberOfEvents(e)}>
        </input>
      </div>
    );
  }
}

export default NumberOfEvents;