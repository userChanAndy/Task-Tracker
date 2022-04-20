import React, { useState } from "react";

function EditTask({
  tasksArr,
  setTasksArr,
  setEdit,
  specificTask,
  isComplete,
}) {
  const [newValue, setNewValue] = useState("");

  function handleUpdate(id) {
    fetch(`http://localhost:9292/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: newValue, complete: isComplete }),
    })
      .then((r) => r.json())
      .then((updatedTask) => {
        handleUpdateTask(updatedTask);
      });
  }

  function handleUpdateTask(updateTask) {
    const updatedTask = tasksArr.map((task) => {
      if (task.id === updateTask.id) {
        updateTask.task = newValue;
        return updateTask;
      } else {
        return task;
      }
    });
    setTasksArr(updatedTask);
  }

  return (
    <div key={specificTask[0].id}>
      <li key={specificTask[0].id}>{specificTask[0].task}</li>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(specificTask[0].id);
          setEdit(false);
        }}
      >
        <label>
          update
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          ></input>
          <input type="submit"></input>
        </label>
      </form>
    </div>
  );
}

export default EditTask;
