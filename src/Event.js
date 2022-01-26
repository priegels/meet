import React, { Component } from 'react';
import moment from 'moment';

class Event extends Component {

  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const dateTime = moment(event.start.dateTime).format('MMMM Do YYYY, h:mm a');

    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>

        <p className="start-date">
          {dateTime} (CET)
        </p>

        <p className="location">
          {event.location}
        </p>

        {!this.state.collapsed && (
          <div>
          <h2>About event:</h2>
          <p>{event.description}</p>
          </div>
        )}

        <div className="show-details-button-div">
          <button className="show-details-button" onClick={this.handleClick}>
          {!this.state.collapsed ? 'Show Details' : 'Hide Details'}
          </button>

        </div>
      </div>
    );
  }
}

export default Event;