// Score.js
import React from "react";

const Score = ({ score }) => {
  return (
    <div style={{ margin: "5px", padding: "5px" }}>
      <p>Date: {score.date}</p>
      <p>Score: {score.score}</p>
    </div>
  );
};

export default Score;
