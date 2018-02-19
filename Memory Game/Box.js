import React, { Component } from "react";

const Box = ({ showing, color, onClick }) => {
  const backgroundColor = showing ? color : "gray";

  return (
    <div
      className="box"
      style={{ backgroundColor }}
      onClick={onClick}
    />
  );
};

export default Box;
