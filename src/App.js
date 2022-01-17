import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

import logo from './img/logo/logo.svg';
import './nprogress.css';
import { WarningAlert } from './Alert';

class App extends Component {


  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    errorText: '' 
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      const { numberOfEvents } = this.state;
      this.setState({
        events: locationEvents.slice(0, numberOfEvents),
        currentLocation: location
      });
    });
  }

  updateNumberOfEvents = async (e) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: e
    });
    this.updateEvents(currentLocation, e);    
  }  

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    console.log(this.state.events);
    return (
      <div className="App">
        {!navigator.onLine ? (<WarningAlert text='You are offline!' />) : (<WarningAlert text='' />)}
        <img src={logo} alt="meet app logo" height={200} width={200} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
