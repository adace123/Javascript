import React from 'react';
import { connect } from 'react-redux';
import Stopwatch from './Stopwatch';

const Navbar = (props) => {
  return (
      <nav className="navbar">
        <h3>Memory Game</h3>
        <span>Matches: {props.matchCount} / {props.numBoxes / 2}</span>
        <span>Time: <Stopwatch /></span>
        <span>Round: {props.rounds}</span>
        <span id="buttons">
        <p id="new-game" onClick={() => props.startNewGame()}>New Game</p>
        <p id="end-game" onClick={() => props.openSaveGameModal()}>End Game</p>
        <p id="scores" onClick={() => props.openScoreList()}>Scores</p>
        </span>
      </nav>
  )
};

const mapStateToProps = (state) => {
  return {
    matchCount: state.matchCount,
    rounds: state.rounds,
    numBoxes: state.numBoxes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startNewGame: () => dispatch({ type: 'RESET' }),
    openSaveGameModal: () => dispatch({ type: 'EXIT' }),
    openScoreList: () => dispatch({ type: 'TOGGLE_SCORELIST', payload: true })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
