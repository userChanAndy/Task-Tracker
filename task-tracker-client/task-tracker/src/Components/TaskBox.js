import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TaskBox({ currentUser }) {
  const [isComplete, setIsComplete] = useState("incomplete");
  const [tasksArr, setTasksArr] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/tasks")
      .then((res) => res.json())
      .then((tasks) => {
        setTasksArr(tasks);
      });
  }, []);

  function addNewTask(newTask) {
    setTasksArr([...tasksArr, newTask]);
  }

  return (
    <div className="taskBox">
      <TaskForm
        addNewTask={addNewTask}
        setIsComplete={setIsComplete}
        currentUser={currentUser}
        isComplete={isComplete}
      />
      <TaskList
        isComplete={isComplete}
        setIsComplete={setIsComplete}
        tasksArr={tasksArr}
        currentUser={currentUser}
        setTasksArr={setTasksArr}
      />
    </div>
  );
}

export default TaskBox;
