import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MemoryGame from "./MemoryGame";
import Navbar from "./Navbar";
import store from './store';
import './style.css';

const App = () =>
  <Provider store={store}>
    <div className="app">
      <Navbar />
      <MemoryGame numBoxes={4} />
    </div>
  </Provider>

render(<App />, document.getElementById('root'));
