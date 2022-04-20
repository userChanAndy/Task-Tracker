import React, { useState } from "react";
import EditTask from "./EditTask";

function Tasks({
  tasksArr,
  currentUser,
  setTasksArr,
  setIsComplete,
  isComplete,
}) {
  const [edit, setEdit] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState(1);
  // let complete = "complete";

  let specificTask = tasksArr.filter(
    (task) => task.id.toString() === currentTaskId.toString()
  );

  function handleDelete(id) {
    fetch(`http://localhost:9292/tasks/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedTasksArr = tasksArr.filter((task) => task.id !== id);
        setTasksArr(updatedTasksArr);
      });
  }

  function handleComplete(id) {
    fetch(`http://localhost:9292/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        task: specificTask[0].task,
        complete: isComplete,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((taskUpdate) => {
        handleCompleteTask(taskUpdate);
      });
    setIsComplete("incomplete");
  }

  function handleCompleteTask(updateComplete) {
    const taskUpdate = tasksArr.map((task) => {
      if (task.id === updateComplete.id) {
        updateComplete.complete = isComplete;
        return updateComplete;
      } else {
        return task;
      }
    });
    setTasksArr(taskUpdate);
  }

  function showEdit(e) {
    setEdit(true);
    setCurrentTaskId(e.target.className);
  }

  const display = tasksArr.map((task) => {
    if (task.user_id === currentUser.id && edit === false) {
      return (
        <div id={task.id} key={task.id}>
          <li className={task.complete} key={task.id}>
            {task.task}
          </li>
          <button
            key={task.task}
            onClick={() => handleDelete(task.id)}
            className="delete"
          >
            delete
          </button>
          <button className={task.id} onClick={showEdit}>
            edit
          </button>
          <button
            onMouseLeave={() => {
              setIsComplete("incomplete");
            }}
            onMouseOver={(e) => {
              setCurrentTaskId(e.target.className);
              setIsComplete("complete");
            }}
            onClick={(e) => {
              e.preventDefault();
              handleComplete(specificTask[0].id);
            }}
            className={task.id}
          >
            done
          </button>
        </div>
      );
    } else if (
      task.user_id === currentUser.id &&
      task.id.toString() === currentTaskId.toString() &&
      edit === true
    ) {
      return (
        <EditTask
          isComplete={isComplete}
          key={task.id}
          specificTask={specificTask}
          setEdit={setEdit}
          tasksArr={tasksArr}
          setTasksArr={setTasksArr}
          currentTaskId={currentTaskId}
          edit={edit}
        />
      );
    } else {
      return null;
    }
  });

  return <div>{display}</div>;
}

export default Tasks;
