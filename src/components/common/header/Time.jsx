import React, { Component } from 'react';

class CurrentTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        currentTime: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  formatTime(time) {
    return time.toLocaleTimeString();
  }

  render() {
    return (
      <div>
        <p>{this.formatTime(this.state.currentTime)}</p>
      </div>
    );
  }
}

export default CurrentTime;
