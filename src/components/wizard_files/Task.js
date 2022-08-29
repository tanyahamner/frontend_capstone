import React from "react";
// import "../styles/wizardsytles.scss";

export default function Task({ taskName, time }) {
  return (
    <div className="task">
      <h1>TaskName: {taskName} </h1>
      <h1>Time to Complete: {time} </h1>
    </div>
  );
}
