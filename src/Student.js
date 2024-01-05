// Student.js
import React from "react";
import Score from "./Score";

const Student = ({ student }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h2>{student.name}</h2>
      <p>{student.bio}</p>
      {student.scores.map((score, index) => (
        <Score key={index} score={score} />
      ))}
    </div>
  );
};

export default Student; // Add this line to export the 'Student' component as the default export
