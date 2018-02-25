import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import 'firebase/firestore';
import MemoryGame from "./MemoryGame";
import Navbar from "./Navbar";
import ScoreList from './ScoreList';
import Alert from './Alert';
import SaveGame from './SaveGame';
import store from './store';
import './style.scss';

const App = () =>
  <Provider store={store}>
      <div className="app">
      <Alert />
        <SaveGame />
        <ScoreList />
        <Navbar />
        <MemoryGame numBoxes={4} />
      </div>
  </Provider>

render(<App />, document.getElementById('root'));
