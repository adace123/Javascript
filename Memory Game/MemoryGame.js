import React, { Component } from "react";
import { connect } from 'react-redux';
import Box from "./Box";

Array.prototype.hasMatch = function (element) {
  return this.reduce((acc, next) => next === element ? ++acc : acc, 0) > 1;
}

class MemoryGame extends Component {
  constructor(props) {
    super(props);
    const colors = this.randomize(this.randomColors());
    this.state = {
      boxes: Array(props.numBoxes).fill().map((el, i) => ({
        showing: false,
        color: colors[i]
      })),
      timeout: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reset) {
      this.newGame();
    }
  }

  newGame = () => {
    const colors = this.randomize(this.randomColors());
    this.setState({
      boxes: Array(this.props.numBoxes).fill().map((el, i) => ({
        showing: false,
        color: colors[i]
      })),
      timeout: null
    });
  };

  randomize = (array) => {
    array.forEach((element, i) => {
      const randomIndex = parseInt(Math.random() * array.length, 10);
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    });
    return array;
  };

  randomColor = () => {
    return `rgb(${Array(3).fill().map(() => parseInt(Math.random() * 256, 10)).join(",")})`;
  };

  randomColors() {
    let randomColor = this.randomColor();
    return Array(this.props.numBoxes).fill().map((color, i) => {
      if (i % 2 === 0) {
        randomColor = this.randomColor();
      }
      return randomColor;
    });
  }

  checkMatch = () => {
    let match = false;
    const boxes = [...this.state.boxes];
    const showing = boxes.filter(box => box.showing).map(box => box.color);
    if (showing.length % 2 === 0) {
      boxes.forEach(({ color }, i) => {
        if (!showing.hasMatch(color)) {
          boxes[i].showing = false;
        } else match = true;
      });
      this.setState({ boxes });
      if(match) {
        this.props.incMatch(1);
      }
      if (boxes.length === showing.length) {
        this.props.stopGame();
      }
    }
  }

  switchColor = (index) => {
    clearTimeout(this.state.timeout);
    const boxes = [...this.state.boxes];
    boxes[index].showing = true;
    this.setState({ boxes, timeout: setTimeout(() => this.checkMatch(), 600) });
  };

  render = () => {
    return (
      <div className="box-container">
        {
          this.state.boxes.map(({ showing, color }, i) =>
            <Box
              showing={showing}
              color={color}
              key={i}
              onClick={() => this.switchColor(i)}
            />)
        }
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    reset: state.reset
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    stopGame: () => dispatch({ type: 'STOP' }),
    incMatch: () => dispatch({ type: 'MATCH' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoryGame);
