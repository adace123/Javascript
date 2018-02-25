import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import db from './firebaseconfig';

class ScoreList extends Component {

  constructor() {
    super();
    this.state = {
      scores: []
    }
  }

  fetchScores = () => {
    db.collection('users').get().then(({ docs }) => {
      const sortedTimes = docs.map(doc => doc.data()).sort((a,b) => new Date('January 1, 1970 ' + a.time) > new Date('January 1, 1970 ' + b.time));
      this.setState({ scores: sortedTimes });
    })
  }

  componentWillMount = () => {
    this.fetchScores();
  }

  componentWillReceiveProps = (props) => {
    if(props.newScore) {
      this.fetchScores();
    }
  }

  render = () => (
    <Modal isOpen={this.props.showing} className="scores">
      <div className="header">
        <span>
          <h2>High Scores</h2>
        </span>
      </div>
      <table className="score-list">
        <thead>
          <tr>
            <td>Username</td>
            <td>Time</td>
          </tr>
        </thead>
        <tbody>
          {
            this.state.scores.map((score, i) => (<tr key={i}>
              <td>{score.username}</td>
              <td>{score.time}</td>
            </tr>))
          }
        </tbody>
      </table>
      <a onClick={() => this.props.closeModal()} className="btn">Close</a>
    </Modal>
  )
}

const mapStateToProps = (state) => {
  return {
    showing: state.scoreListShowing,
    newScore: state.newScore
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch({ type: 'TOGGLE_SCORELIST', payload: false })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreList);
