import React from "react";

function Homepage() {
  return (
    <div className="homePage">
      <p>This is an app to help manage your productivity</p>
      <h2>How to use?</h2>
      <ol>
        <li>Create a user name</li>
        <li>set tasks for the day in the provided input field</li>
        <li>when a task is completed, click "done"</li>
        <li>click edit to make changes to a task that has already been set</li>
        <li>click delete to delete task</li>
        <li>
          when all tasks are complete, kick your feet up and have a drink.
          Congrats, you earned it!
        </li>
      </ol>
    </div>
  );
}

export default Homepage;
