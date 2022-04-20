import React from "react";
import Tasks from "./Tasks";

function TaskList({
  tasksArr,
  currentUser,
  setTasksArr,
  isComplete,
  setIsComplete,
}) {
  return (
    <ul className="taskList">
      <Tasks
        isComplete={isComplete}
        setIsComplete={setIsComplete}
        tasksArr={tasksArr}
        currentUser={currentUser}
        setTasksArr={setTasksArr}
      />
    </ul>
  );
}

export default TaskList;
