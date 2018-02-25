import { createStore } from 'redux';
import { connect } from 'react-redux';

const initialState = {
  start: true,
  reset: false,
  matchCount: 0,
  rounds: 1,
  gameSaveShowing: false,
  times: [],
  numBoxes: 0,
  alertShowing: false,
  scoreListShowing: false,
  newScore: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STOP':
      return { ...state, start: false, reset: false };
    case 'START':
      return {...state, start: true, reset: false }
    case 'RESET':
      return { ...state, start: true, reset: true, matchCount: 0, rounds: state.rounds + 1 }
    case 'MATCH':
      return { ...state, matchCount: action.payload }
    case 'EXIT':
      return { ...state, gameSaveShowing: true }
    case 'CLOSE_MODAL':
      return { ...state, gameSaveShowing: false, scoreListShowing: false }
    case 'SET_NUM_BOXES':
      return { ...state, numBoxes: action.payload }
    case 'SAVE_TIME':
      return  { ...state, times: [...state.times, new Date("January 1, 1970 " + action.payload)] }
    case 'SHOW_ALERT':
      return { ...state, alertShowing: action.payload }
    case 'TOGGLE_SCORELIST':
      return { ...state, scoreListShowing: action.payload }
    case 'ADD_SCORE':
      return { ...state, newScore: true }
    default:
      return state;
  }
}
const store = createStore(reducer);

export default store;
