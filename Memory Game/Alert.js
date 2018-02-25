import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ alertShowing }) => alertShowing ? (
  <div className="alert">
    <p>Score saved!</p>
  </div>
) : "";

const mapStateToProps = (state) => {
  return {
    alertShowing: state.alertShowing
  }
}

export default connect(mapStateToProps)(Alert);
