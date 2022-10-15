import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      numberOfEvents: 32,
      infoText: ''
    };
  }

  updateNumberOfEvents = (event) => {
    const value = event.target.value
    this.setState({
      numberOfEvents: event.target.value,
    });
    this.props.updateNumberOfEvents(event.target.value);
    if (value < 1 || value > 32) {
      this.setState({
        query: value,
        infoText: "Please enter number between 1 - 32",
      })
    } else {
      return this.setState({
        query: value,
        infoText: '',
      })
    }
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <label className="numbercount">Number of events</label>
        <input
          type="number"
          className="numberinput"
          onChange={this.updateNumberOfEvents}
          value={this.state.numberOfEvents}
        />
        <div>
          <ErrorAlert text={this.state.infoText} />
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;
