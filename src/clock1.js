import React from 'react';

export default class Clock1 extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tiktok(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tiktok() {
    this.setState({ date: new Date() });
  }

  render() {
    return <div className='clock'>{this.state.date.toLocaleTimeString()}</div>;
  }
}
