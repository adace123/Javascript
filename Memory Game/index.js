import React, { Component } from 'react';
import { render } from 'react-dom';
import MemoryGame from "./MemoryGame";
import Navbar from "./Navbar";
import './style.css';

class App extends Component {
  constructor() {
    super();
    
  }

  render() {
    return (
    <div className="app">
      <Navbar />
      <MemoryGame />
    </div>
    );
  }
}

render(<App />, document.getElementById('root'));
