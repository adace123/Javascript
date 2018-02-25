import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import db from './firebaseconfig';

class SaveGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSaveDialog: false,
      username: ''
    }
  }

  componentWillMount = () => {
    Modal.setAppElement('body');
  }

  saveBestTime = () => {
    this.props.closeModal();
    try {
      db.collection("users").add({
        username: this.state.username,
        time: this.getBestTime()
      }).then(record => {
        this.props.showAlert(true);
        this.props.newScore();
        setTimeout(() => this.props.showAlert(false), 3000);
      })
    } catch (e) {
      console.log(e);
    }
  }

  getBestTime = () => {
    const bestTime = new Date(Math.min.apply(null, this.props.times));
    return bestTime.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  }

  render = () => (
    <Modal
      className="save-game"
      isOpen={this.props.showing}>
      {!this.state.showSaveDialog &&
        <div>
          {this.props.times.length >= 1 && <span>
            <p>Best time: {this.getBestTime()}</p>
            <p>Would you like to save your score?</p>
          </span>
          }
          {
            !this.props.times.length && <p>No score to save yet.</p>
          }
        </div>}
      {!this.state.showSaveDialog &&
        <div className="save-options">
          <a className={!this.props.times.length ? 'disableClick' : ''} onClick={() => this.setState({ showSaveDialog: true })}>Yes</a>
          <a onClick={() => this.props.closeModal()}>Cancel</a>
        </div>
      }
      {
        this.state.showSaveDialog &&
        <span className="user-input">
          <input autoFocus placeholder="Enter username" value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })} />
          <a className={this.state.username.length < 3 || this.state.username.length > 15 ? 'disableClick' : ''} onClick={() => this.saveBestTime()}>Submit</a>
          <a onClick={() => this.setState({ showSaveDialog: false })}>Cancel</a>
        </span>
      }
    </Modal>
  )
}

const mapStateToProps = (state) => {
  return {
    showing: state.gameSaveShowing,
    times: state.times
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
    showAlert: (mode) => dispatch({ type: 'SHOW_ALERT', payload: mode }),
    newScore: () => dispatch({ type: 'ADD_SCORE' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveGame);
