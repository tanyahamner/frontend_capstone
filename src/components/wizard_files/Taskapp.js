import React, { useState } from "react";
import { Link } from "react-router-dom";
import Task from "./Task";

function Taskapp() {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, { task: taskName, time: time }]);
    setTaskName("");
    setTime("");
  };

  return (
    <center>
      <div className="Task">
        <h1>Todo List</h1>
        <label>Task Name:</label>
        <br></br>
        <input
          type="text"
          id="task"
          onChange={(e) => {
            setTaskName(e.target.value);
            <br></br>;
          }}
        />
        <br></br>
        <label>Time:</label>
        <br></br>
        <input
          type="text"
          id="time"
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />

        <br></br>
        <button onClick={addTask}>Add</button>

        {taskList.map((task) => {
          return <Task taskName={task.task} time={task.time} />;
        })}
        <div className="move-button">
          <Link to="/wizards">
            <button className="back-wizards">Back</button>
          </Link>
        </div>
      </div>
    </center>
  );
}

export default Taskapp;
