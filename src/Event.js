import React, { Component } from 'react';
import moment from 'moment';

class Event extends Component {
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

        <div className="show-details-button-div">
          <button className="show-details-button">Show Details</button> 
        </div>
      </div>
    );
  }
}

export default Event;