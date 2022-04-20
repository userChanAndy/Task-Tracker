import React, { useState } from "react";

function TaskForm({ addNewTask, currentUser, isComplete, setIsComplete }) {
  const [task, setTask] = useState("");
  function createNewTask() {
    fetch("http://localhost:9292/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: task,
        user_id: currentUser.id,
        complete: isComplete,
      }),
    })
      .then((r) => r.json())
      .then((newTask) => addNewTask(newTask));
    setTask("");
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createNewTask();
      }}
    >
      <label htmlFor="tasks">
        Tasks
        <input
          type="text"
          placeholder="enter tasks here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <input type="submit"></input>
      </label>
    </form>
  );
}

export default TaskForm;
