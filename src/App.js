import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';

import logo from './img/logo/logo.svg';
import './nprogress.css';
import { WarningAlert } from './Alert';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


class App extends Component {


  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
    errorText: '',
    showWelcomeScreen: undefined 
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };



  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        {!navigator.onLine ? (<WarningAlert text='You are offline!' />) : (<WarningAlert text='' />)}
        <img src={logo} alt="meet app logo" height={200} width={200} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
          <h4>Events in each city</h4>

          <div className="data-vis-wrapper">
            <EventGenre events={this.state.events} />      
            <ResponsiveContainer height={400} >
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="City" />
                <YAxis type="number" dataKey="number" name="Number of Events" allowDecimals={false} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill="#055a05" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}

export default App;
