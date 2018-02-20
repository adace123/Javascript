import { createStore } from 'redux';
import { connect } from 'react-redux';

const initialState = {
  start: true,
  reset: false,
  matchCount: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STOP':
      return { ...state, start: false, reset: false };
    case 'START':
      return {...state, start: true, reset: false }
    case 'RESET':
      return { ...state, start: true, reset: true, matchCount: 0 }
    case 'MATCH':
      return { ...state, matchCount: state.matchCount + 1 }
    default:
      return state;
  }
}
const store = createStore(reducer);

export default store;
