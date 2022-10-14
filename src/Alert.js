import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            backgroundcolor: this.backgroundcolor
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}
class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'blue';
        this.backgroundcolor = 'black'
    }
}

export { InfoAlert };