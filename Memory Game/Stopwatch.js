import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: null
    }
  }

  componentWillReceiveProps({ reset, start }) {
    if (!start) {
      this.stopClock();
      
    } else if (reset) {
      this.resetClock();
    }
  }

  resetClock() {
    this.stopClock();
    this.setState({ hours: 0, minutes: 0, seconds: 0 });
    this.startClock();
  }

  stopClock() {
    this.setState({ timer: clearInterval(this.state.timer) });
    this.props.saveTime(this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds);
  }

  startClock() {
    this.setState({
      timer: setInterval(() => {
        const { hours, minutes, seconds } = this.state;
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
        } else if (minutes === 60) {
          minutes = 0;
          hours++;
        }
        this.setState({ hours, minutes, seconds });
      }, 1000)
    })
  }

  componentDidMount() {
    this.startClock();
  }

  render = () => {
    return (
      <span className="stopwatch">
        {this.state.hours < 10 ? '0' + this.state.hours : this.state.hours}:{this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes}
        :{this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds}
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    start: state.start,
    reset: state.reset
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveTime: (payload) => dispatch({ type: 'SAVE_TIME', payload })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);
