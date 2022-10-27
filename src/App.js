import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import { mockData } from './mock-data';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

class App extends Component {
  state = {
    events: mockData,
    locations: [],
    numberOfEvents: 32,
    currentLocation: 'all',
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateNumberOfEvents = async (eventNumbers) => {
    await this.setState(
      {
        numberOfEvents: eventNumbers,
      },
      this.updateEvents(this.state.currentLocation, eventNumbers)
    );
  };

  updateEvents = (location, eventCount) => {
    console.log(eventCount);
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);

      const evts = locationEvents.slice(0, eventCount);
      if (this.mounted) {
        this.setState({
          events: evts,
          currentLocation: location,
          numberOfEvents: eventCount,
        });
      }
    });
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, number };
    })
    return data;
  };

  render() {
    const { locations, numberOfEvents } = this.state;
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch updateEvents={this.updateEvents} locations={locations} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={numberOfEvents}
        />
        <h4>Events in each city</h4>

        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#08d9d6" />
        </ScatterChart>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
