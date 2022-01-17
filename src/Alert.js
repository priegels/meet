import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            fontSize: this.fontSize
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
        this.color = '#055a05';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#930000';
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#000000';
        this.fontSize = 30;
    }
}

export { InfoAlert, ErrorAlert, WarningAlert };