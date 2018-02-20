import React from 'react';
import { connect } from 'react-redux';
import Stopwatch from './Stopwatch';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <h3>Memory Game</h3>
      <span>Matches: {props.matchCount}</span>
      <span>Time: <Stopwatch /></span>
      <p id="new-game" onClick={() => props.startNewGame()}>New Game</p>
    </nav>
  )
};

const mapStateToProps = (state) => {
  return {
    matchCount: state.matchCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startNewGame: () => dispatch({ type: 'RESET' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
