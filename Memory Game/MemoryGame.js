import React, { Component } from "react";
import Box from "./Box";

Array.prototype.hasMatch = function (element) {
  return this.reduce((acc, next) => next === element ? ++acc : acc, 0) > 1;
}

class MemoryGame extends Component {
  constructor() {
    super();
    const colors = this.randomize(this.randomColors());
    this.state = {
      boxes: Array(16).fill().map((el, i) => ({
        showing: false,
        color: colors[i]
      })),
      timeout: null
    };
  }

  newGame = () => {
    const colors = this.randomize(this.randomColors());
    this.setState({
      boxes: Array(16).fill().map((el, i) => ({
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
    return Array(16).fill().map((color, i) => {
      if (i % 2 === 0) {
        randomColor = this.randomColor();
      }
      return randomColor;
    });
  }

  checkMatch = () => {
    const boxes = [...this.state.boxes];
    const showing = boxes.filter(box => box.showing).map(box => box.color);
    if (showing.length % 2 === 0) {
      boxes.forEach(({ color }, i) => {
        if (!showing.hasMatch(color)) {
          boxes[i].showing = false;
        }
      });
      this.setState({ boxes });
    }
  }

  switchColor = (index) => {
    clearTimeout(this.state.timeout);
    const boxes = [...this.state.boxes];
    boxes[index].showing = true;
    this.setState({ boxes, timeout: setTimeout(() => this.checkMatch(), 500) });
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

export default MemoryGame;
