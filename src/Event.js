import React, { Component } from "react";

class Event extends Component {
    render() {
        return <div className="event-info">
            <div>{this.props.event.start.dateTime}</div>
            <div>{this.props.event.start.timeZone}</div>
            <div>{this.props.event.location}</div>
            <div>{this.props.event.summary}</div>
            <div>{this.props.event.description}</div>
            <div className="details-button"></div>
        </div>

    }
}
export default Event;